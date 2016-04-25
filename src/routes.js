import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from 'ac/pages/app';
import Home from 'ac/pages/home';
import About from 'ac/pages/about';
import NotFound from 'ac/pages/not-found';

export default [
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="about" component={About}/>
	</Route>,
	<Route path="*" component={NotFound}/>
];
