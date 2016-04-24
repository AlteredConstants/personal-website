import React from 'react';
import {Link} from 'react-router';
import Helmet from 'react-helmet';

export default class NotFound extends React.Component {
	render() {
		return <p><Helmet title="Not Found"/>Nope. <Link to="/">Go home.</Link></p>;
	}
};
