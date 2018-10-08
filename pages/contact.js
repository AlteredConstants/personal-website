import React from "react";
import createPage from "component/createPage";
import MainSection from "component/MainSection";

function Contact() {
  return (
    <article>
      <style jsx>{`
        ul {
          width: 17em;
          margin: auto;
          padding: 0;
        }
        ul li {
          display: inline-block;
          margin: auto 0.2em;
        }
      `}</style>
      <MainSection title="Contact">
        <p>
          The best place to contact me is probably Twitter{" "}
          <a href="https://twitter.com/AltConsts">@AltConsts</a>.
        </p>
        <p>Other options include:</p>
        <ul>
          <li>
            <a href="https://twitter.com/AltConsts">
              <img
                src="/static/img/social-icons/twitter.png"
                alt="Twitter"
                title="Twitter"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/zeff.svoboda">
              <img
                src="/static/img/social-icons/facebook.png"
                alt="Facebook"
                title="Facebook"
              />
            </a>
          </li>
          <li>
            <a href="http://www.linkedin.com/pub/zeff-svoboda/b/316/297">
              <img
                src="/static/img/social-icons/linkedin.png"
                alt="LinkedIn"
                title="LinkedIn"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/AlteredConstants">
              <img
                src="/static/img/social-icons/youtube.png"
                alt="YouTube"
                title="YouTube"
              />
            </a>
          </li>
          <li>
            <a href="http://vimeo.com/alteredconstants">
              <img
                src="/static/img/social-icons/vimeo.png"
                alt="Vimeo"
                title="Vimeo"
              />
            </a>
          </li>
        </ul>
      </MainSection>
    </article>
  );
}

export default createPage(Contact, { title: "Contact" });
