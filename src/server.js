import express from 'express';
import path from 'path';
import os from 'os';

import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import Helmet from 'react-helmet';

import routes from 'ac/routes';
import renderIndex from 'ac/render-index';
import NotFound from 'ac/pages/not-found';

function getFilePathFromUrl(fileUrl) {
	let fileSchemaAndHostRegExp = (os.platform() === 'win32') ? '^file://[^/]*/' : '^file://[^/]*';
	let filePath = fileUrl.replace(new RegExp(fileSchemaAndHostRegExp), '');
	return path.normalize(filePath);
}

function getProjectPath(filePath) {
	let modulePath = path.dirname(getFilePathFromUrl(__moduleName));
	return path.join(modulePath, '..', filePath);
}

function sendStaticFile(req, res) {
	res.sendFile(getProjectPath(req.url));
}

function routeExists(renderProps) {
	return renderProps && !renderProps.components.some(component => component === NotFound);
}

let server = express();
server.get('/jspm.*.js', sendStaticFile);
server.get('/jspm_packages/system.js', sendStaticFile);
server.use('/jspm_packages', express.static(getProjectPath('jspm_packages'), {maxAge: '365d'}));
server.use('/src', express.static(getProjectPath('src')));

server.get('*', (req, res) => {
	match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
		if (error) {
			res.status(500).send(error.message);
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (routeExists(renderProps)) {
			let app = renderToString(<RouterContext {...renderProps}/>);
			let head = Helmet.rewind();
			res.status(200).send(renderIndex({head, app}));
		} else {
			let app = renderToString(<NotFound/>);
			let head = Helmet.rewind();
			res.status(404).send(renderIndex({head, app}));
		}
	})
});

server.listen(3000);
