import React from 'react';
import {Link} from 'react-router';
import Helmet from 'react-helmet';

export default class About extends React.Component {
	render() {
		return <p><Helmet title="About"/>About stuff. <Link to="/nonsense">This doesn't exist.</Link></p>;
	}
};
