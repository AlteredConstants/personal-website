import React from 'react';
import {Link} from 'react-router';

export default class About extends React.Component {
	render() {
		return <p>About stuff. <Link to="/nonsense">This doesn't exist.</Link></p>;
	}
};
