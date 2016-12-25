import React from 'react';
import Head from 'next/head';
import Link from 'next/prefetch';

const navLinks = [
  { route: '/', text: 'Home' },
  { route: '/about', text: 'About' },
  { route: '/resume', text: 'Résumé' },
  { route: '/contact', text: 'Contact' },
];

export default function Page({ title, pathname, children }) {
  return (
    <div id="app">
      <Head>
        <title>{`${(title ? `${title} ` : '')}Altered Constants`}</title>
        <link rel="stylesheet" type="text/css" href="/static/screen.css" />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Enriqueta:400,700|Source+Sans+Pro:400italic,700italic,400" />
      </Head>
      <header>
        <h1><Link href="/">Altered Constants</Link></h1>
      </header>
      <nav>
        <header>
          <h1>Site Navigation</h1>
        </header>
        <ul>
          {
            navLinks.map(({ route, text }) => (
              <li key={route}>
                <Link href={route}>
                  <a className={(pathname === route) ? 'current' : ''}>{text}</a>
                </Link>
              </li>
            ))
          }
          {/* <li><a href="/blog">Blog</a></li> */}
        </ul>
      </nav>
      <div id="content">{children}</div>
      <hr />
      <Link href="/license">
        <a id="license-link">
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
        </a>
      </Link>
    </div>
  );
}

Page.propTypes = {
  title: React.PropTypes.string,
  pathname: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};
