import React from "react";
import Link from "next/prefetch";

export default function Footer() {
  return (
    <footer>
      <style jsx>{`
        footer {
          font-size: 0.9rem;
          text-align: center;
          padding: 1em 0;
          display: flex;
          justify-content: center;
        }

        p {
          margin: 0;
        }
        img {
          margin-top: 0.7em;
        }

        a {
          color: #404040;
        }
        a:link,
        a:visited {
          opacity: 0.4;
        }
        a:hover {
          opacity: 1;
          text-decoration: none;
        }

        #copyleft-icon {
          transform: scaleX(-1);
          display: inline-block;
          font-family: arial;
        }
      `}</style>
      <Link href="/license">
        <a>
          <section id="page-info">
            <p id="copyright">
              All content <span id="copyleft-icon">&copy;</span> Zeff Svoboda
              unless otherwise noted.
            </p>
            <p id="license-message">
              But it's dangerous to go alone! Take this.
            </p>
            <img
              src="/static/img/sword.png"
              alt="Creative Commons Attribution-Sharealike Unported 3.0 License"
            />
          </section>
        </a>
      </Link>
    </footer>
  );
}
