import React from 'react';
import Head from 'next/head';
import Link from 'next/prefetch';
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

          body {
            width: 80%;
            min-width: 200px;
            max-width: 1000px;
            margin: auto;
            font-family: 'Enriqueta', Arial, sans-serif;
            font-size: 11pt;
            line-height: 1.4em;
          }

          body {
            color: #000;
            background-color: #cfc9c1;
            background: linear-gradient(0deg, #E4E4D1, #DAD7C9 20em, #CFC9C1 60em) no-repeat fixed 0 0 #CFC9C1;
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
          header h1 {
            font-size: 1em;
          }

          header h1 a, nav li a {
            display: block;
            box-sizing: content-box;

            width: 9em;
            height: 3.2em;
            border-radius: 0 5em 0 0;
            padding: 2em 0 0 1em;

            font-size: 1.4em;
            line-height: 1.2em;
          }

          header {
            width: 30%;
            float: right;
            clear: right;
          }

          nav {
            width: 30%;
            float: right;
            clear: right;
          }

          header h1 a:link, header h1 a:visited {
            background-color: #df9739;
            color: #dfd7b7;
            font-weight: 700;
            text-decoration: none;
          }

          nav li a:link, nav li a:visited {
            margin: 0.5em 0;
            border-bottom: 2px solid #fff;

            background-color: transparent;
            color: #fff;

            text-decoration: none;
          }

          nav li a:link.current, nav li a:visited.current {
            border: 2px solid #fff;
            font-weight: bold;
          }

          header h1 a:hover {
            color: #fff;
          }

          nav li a:hover {
            background-color: #fff;
            color: #548bd2;
          }

          nav header {
            display: none;
          }

          nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }

          nav ul li:first-child { display: none; }

          nav + :global(*) {
            width: 70%;
            padding-right: 2em;
            padding-top: 5.47em;
            padding-bottom: 2.2em;
          }

          nav + :global(*) + hr {
            display: none;
          }
        `}</style>
        <header>
          <h1 className="header-font"><Link href="/"><a>Altered Constants</a></Link></h1>
        </header>
        <nav>
          <header>
            <h1>Site Navigation</h1>
          </header>
          <ul>
            {
              navLinks.map(({ route, text }) => (
                <li key={route} className="header-font">
                  <Link href={route}>
                    <a className={(pathname === route) ? 'current' : ''}>{text}</a>
                  </Link>
                </li>
              ))
            }
            {/* <li><a href="/blog">Blog</a></li> */}
          </ul>
        </nav>
        {child}
        <hr />
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
