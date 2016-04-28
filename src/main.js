import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from 'ac/routes';

import 'systemjs-hot-reloader/default-listener.js';

class RenderForcer extends React.Component {
  componentWillMount () {
    this.forceUpdate()  // a little hack to help us rerender when this module is reloaded
  }
  render () {
    return this.props.children;
  }
}

render(
	<RenderForcer><Router history={browserHistory} routes={routes}/></RenderForcer>,
	document.getElementById('react-content')
);
