import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './pages/app';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/not-found';

export default [
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="about" component={About}/>
	</Route>,
	<Route path="*" component={NotFound}/>
];
