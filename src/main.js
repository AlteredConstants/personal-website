import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from 'routes';

import 'systemjs-hot-reloader/default-listener.js';

class RenderForcer extends React.Component {
	static propTypes = { children: React.PropTypes.element.isRequired };
	componentWillMount() { this.forceUpdate(); }
	render() { return this.props.children; }
}

render(
	<RenderForcer><Router history={browserHistory} routes={routes} /></RenderForcer>,
	document.getElementById('react-content')
);
