import React from 'react';
import {Link} from 'react-router';
import Helmet from 'react-helmet';

export default class App extends React.Component {
	render() {
		return (
			<section>
				<Helmet
					titleTemplate="%s Altered Constants"
					defaultTitle="Altered Constants"
				/>
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
