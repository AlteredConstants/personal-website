import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'pages/app';
import Home from 'pages/home';
import About from 'pages/about';
import Resume from 'pages/resume';
import Contact from 'pages/contact';
import License from 'pages/license';
import NotFound from 'pages/not-found';

export default [
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="resume" component={Resume} />
    <Route path="contact" component={Contact} />
    <Route path="license" component={License} />
  </Route>,
  <Route path="*" component={NotFound} />,
];
