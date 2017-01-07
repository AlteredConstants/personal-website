import React from 'react';
import Head from 'next/head';
import NavLink from 'component/NavLink';
import Footer from 'component/Footer';

const navLinks = [
  { route: '/', text: 'Home' },
  { route: '/about', text: 'About' },
  { route: '/resume', text: 'Résumé' },
  { route: '/contact', text: 'Contact' },
];

export default (Component, { title } = {}) => {
  const Page = (props) => {
    const child = <Component {...props} />;
    const pathname = props.url.pathname;
    return (
      <div id="page">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{`${(title ? `${title} ` : '')}Altered Constants`}</title>
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Enriqueta:400,700|Source+Sans+Pro:400italic,700italic,400" />
        </Head>
        <style jsx global>{`
          /* Colors
          ** Orange Highlight: #df9739
          ** Light Background: #e4e4d1
          ** Dark Background: #cfc9c1
          ** Dark Font: #dfd7b7
          */

          * { box-sizing: border-box; }
          a img { border: 0; }

          html { min-height: 100%; }
          body {
            min-height: 100%;
            margin: 0;
            padding: 2rem;
            color: #000;
            font-family: 'Enriqueta', Arial, sans-serif;
            font-size: 11pt;
            line-height: 1.4em;
            background-color: #E4E4D1;
            background-image: linear-gradient(to bottom, #CFC9C1, #DAD7C9 40em, #E4E4D1 120em);
          }

          a:link {
            color: #548bd2;
            text-decoration: none;
          }

          a:visited {
            color: #76aaf4;
          }

          a:hover {
            text-decoration: underline;
          }

          .header-font {
            font-family: 'Source Sans Pro', Arial, sans-serif;
            font-style: italic;
            text-transform: uppercase;
            letter-spacing: 0.25em;
          }
        `}</style>
        <style jsx>{`
          #page {
            min-height: 100%;
            min-width: 200px;
            max-width: 960px;
            margin: auto;
            display: flex;
            flex-flow: row wrap;
          }

          header, nav {
            flex: 1 100%;
            display: flex;
            justify-content: flex-end;
          }

          nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }

          nav li:first-child { display: none; }

          header h1, nav li {
            margin: 0 0 0.2rem 0;
          }

          nav header {
            display: none;
          }

          /* Footer */
          #page > :global(*):last-child {
            flex: 1 100%;
          }

          @media (min-width: 768px) {
            nav {
              order: 3;
              flex: 0;
            }

            /* Main Content */
            #page > :global(*):nth-last-child(2) {
              order: 2;
              flex: 1 0%;
              margin-top: calc(-2.7rem + -4px);
              padding-right: 2em;
              padding-bottom: 2.2em;
            }

            /* Footer */
            #page > :global(*):last-child {
              order: 4;
            }

            header h1, nav li {
              margin: 0 0 0.5rem 0;
            }
          }
        `}</style>
        <header>
          <h1><NavLink href="/" isPrimary>Altered Constants</NavLink></h1>
        </header>
        <nav>
          <header>
            <h1>Site Navigation</h1>
          </header>
          <ul>
            {
              navLinks.map(({ route, text }) => (
                <li key={route}>
                  <NavLink href={route} isCurrent={pathname === route}>{text}</NavLink>
                </li>
              ))
            }
            {/* <li><a href="/blog">Blog</a></li> */}
          </ul>
        </nav>
        {child}
        <Footer />
      </div>
    );
  };
  // Next.js props provided to its pages.
  Page.propTypes = {
    url: React.PropTypes.shape({
      pathname: React.PropTypes.string.isRequired,
    }),
  };
  return Page;
};
