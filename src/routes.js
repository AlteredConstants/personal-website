import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from 'ac/pages/app';
import Home from 'ac/pages/home';
import About from 'ac/pages/about';
import Resume from 'ac/pages/resume';
import Contact from 'ac/pages/contact';
import License from 'ac/pages/license';
import NotFound from 'ac/pages/not-found';

export default [
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="about" component={About}/>
		<Route path="resume" component={Resume}/>
		<Route path="contact" component={Contact}/>
		<Route path="license" component={License}/>
	</Route>,
	<Route path="*" component={NotFound}/>
];
