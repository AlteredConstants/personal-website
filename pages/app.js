import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {
	render() {
		return (
			<section>
				<h1>Altered Constants</h1>
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
					</ul>
				</nav>
				{this.props.children}
			</section>
		);
	}
};
