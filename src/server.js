import express from 'express';

import React from 'react';
import {match, RouterContext} from 'react-router';

import routes from 'routes';
import renderIndex from 'utils/render-index';
import NotFound from 'pages/not-found';
import getAbsoluteProjectPath from 'utils/get-absolute-project-path';

function sendStaticFile(req, res) {
	res.sendFile(getAbsoluteProjectPath(req.url));
}

function routeExists(renderProps) {
	return renderProps && !renderProps.components.some(component => component === NotFound);
}

const handler = express();
handler.get('/jspm.*.js', sendStaticFile);
handler.get('/jspm_packages/system.js', sendStaticFile);
handler.use('/jspm_packages', express.static(getAbsoluteProjectPath('jspm_packages'), {maxAge: '365d'}));
handler.use('/', express.static(getAbsoluteProjectPath('src')));

handler.get('*', (req, res) => {
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
	});
});

handler.listen(3000);
