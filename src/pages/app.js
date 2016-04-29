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

// TODO: Replace this with something like conditional loading.
// http://martinmicunda.com/2015/10/26/conditional-module-loading-with-systemjs/
const isBrowser = new Function("try {return this===window;}catch(e){return false;}");

function getServerRenderTimestamp() {
  if (!isBrowser()) {
    return new Date().toISOString();
  }
  const timestampNode = document.getElementById('render-time-message');
  return timestampNode ? timestampNode.textContent : '';
}

function getRenderTimeDifferenceMessage(serverRenderTimestamp) {
  const serverRenderDate = new Date(serverRenderTimestamp);
  if (isNaN(serverRenderDate)) {
    return '';
  }
  return `Fully loaded after ${(new Date() - serverRenderDate) / 1000} seconds.`;
}

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  };

  state = { renderTimeMessage: getServerRenderTimestamp() };

  componentDidMount() {
    this.setState({
      renderTimeMessage: getRenderTimeDifferenceMessage(this.state.renderTimeMessage),
    });
  }

  render() {
    return (
      <div id="app">
        <Helmet
          titleTemplate="%s Altered Constants"
          defaultTitle="Altered Constants"
          link={[
            {
              rel: 'stylesheet',
              type: 'text/css',
              href: '/screen.css',
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
        <div id="content">{this.props.children}</div>
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
        <section
          id="render-time-message"
          style={{ marginTop: 10, opacity: 0.3, textAlign: 'center' }}
        >
          {this.state.renderTimeMessage}
        </section>
      </div>
    );
  }
}
