import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

const navLinks = [
  { route: '/', text: 'Home' },
  { route: '/about', text: 'About' },
  { route: '/resume', text: 'Résumé' },
  { route: '/contact', text: 'Contact' },
  { route: '/blog', text: 'Blog' },
];

export default function App({ children }) {
  return (
    <div id="app">
      <Helmet
        titleTemplate="%s Altered Constants"
        defaultTitle="Altered Constants"
        link={[
          {
            rel: 'stylesheet',
            type: 'text/css',
            href: '/static/screen.css',
          },
          {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://fonts.googleapis.com/css?family=Enriqueta:400,700|Source+Sans+Pro:400italic,700italic,400',
          },
        ]}
      />
      <header>
        <h1><Link to="/">Altered Constants</Link></h1>
      </header>
      <nav>
        <header>
          <h1>Site Navigation</h1>
        </header>
        <ul>
          {
            navLinks.map(({ route, text }) => (
              <li key={route}><Link to={route} activeClassName="current">{text}</Link></li>
            ))
          }
        </ul>
      </nav>
      <div id="content">{children}</div>
      <hr />
      <Link to="/license" id="license-link">
        <footer>
          <section id="page-info">
            <p id="copyright">
              All content <span id="copyleft-icon">&copy;</span> Zeff Svoboda unless otherwise
              noted.
            </p>
            <p id="license-message">But it's dangerous to go alone! Take this.</p>
            <img
              src="//www.alteredconstants.com/inc/img/sword.png"
              alt="Creative Commons Attribution-Sharealike Unported 3.0 License"
            />
          </section>
        </footer>
      </Link>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};
