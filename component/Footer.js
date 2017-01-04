import React from 'react';
import Link from 'next/prefetch';

export default function Footer() {
  return (
    <Link href="/license">
      <a>
        <style jsx>{`
          a, a:visited, a:hover {
            text-decoration: none;
            clear: both;
            display: block;
          }

          a footer {
            padding: 1em 0;
            color: #404040;
            font-size: 0.9em;
            text-align: center;
            line-height: 0.5em;
            width: 100%;
            margin: 0;
            opacity: 0.4;
          }

          a:hover footer {
            opacity: 1;
          }

          #copyleft-icon {
            transform: scaleX(-1);
            display: inline-block;
            font-family: arial;
          }
        `}</style>
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
  );
}
