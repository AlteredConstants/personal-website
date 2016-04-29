import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

export default function NotFound() {
  return <p><Helmet title="Not Found" />Nope. <Link to="/">Go home.</Link></p>;
}
