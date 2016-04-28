import express from 'express';

import React from 'react';
import {match, RouterContext} from 'react-router';

import routes from 'ac/routes';
import renderIndex from 'ac/utils/render-index';
import NotFound from 'ac/pages/not-found';
import getAbsoluteProjectPath from 'ac/utils/get-absolute-project-path';

function sendStaticFile(req, res) {
	res.sendFile(getAbsoluteProjectPath(req.url));
}

function routeExists(renderProps) {
	return renderProps && !renderProps.components.some(component => component === NotFound);
}

let server = express();
server.get('/jspm.*.js', sendStaticFile);
server.get('/jspm_packages/system.js', sendStaticFile);
server.use('/jspm_packages', express.static(getAbsoluteProjectPath('jspm_packages'), {maxAge: '365d'}));
server.use('/src', express.static(getAbsoluteProjectPath('src')));

server.get('*', (req, res) => {
	match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
		if (error) {
			res.status(500).send(error.message);
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (routeExists(renderProps)) {
			res.status(200).send(renderIndex(<RouterContext {...renderProps}/>));
		} else {
			res.status(404).send(renderIndex(<NotFound/>));
		}
	})
});

server.listen(3000);
