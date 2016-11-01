import express from 'express';
import path from 'path';

import React from 'react';
import { match, RouterContext } from 'react-router';

import routes from 'routes';
import renderIndex from 'utils/render-index';
import NotFound from 'pages/not-found';

function routeExists(renderProps) {
  return renderProps && !renderProps.components.some(component => component === NotFound);
}

const handler = express();
handler.use('/static', express.static(path.join(__dirname, 'public')));

handler.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (routeExists(renderProps)) {
      res.status(200).send(renderIndex(<RouterContext {...renderProps} />));
    } else {
      res.status(404).send(renderIndex(<NotFound />));
    }
  });
});

handler.listen(3000);
