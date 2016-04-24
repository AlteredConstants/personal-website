import express from 'express';

import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import routes from './routes';
import renderIndex from './render-index';
import NotFound from './pages/not-found';

function routeExists(renderProps) {
	return renderProps && !renderProps.components.some(component => component === NotFound);
}

var server = express();
server.use(express.static('.'));

server.get('*', (req, res) => {
	match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
		if (error) {
			res.status(500).send(error.message);
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (routeExists(renderProps)) {
			res.status(200).send(renderIndex({
				title: 'Meow',
				app: renderToString(<RouterContext {...renderProps}/>)
			}));
		} else {
			res.status(404).send(renderIndex({
				title: 'Not Found',
				app: renderToString(<NotFound/>)
			}))
		}
	})
});

server.listen(3000);
