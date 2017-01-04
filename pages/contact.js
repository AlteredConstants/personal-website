import React from 'react';
import createPage from 'component/createPage';
import MainSection from 'component/MainSection';

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
          At the moment, the best place to contact me is probably
          Twitter <a href="https://twitter.com/AltConsts">@AltConsts</a>.
        </p>
        <p>
          If you've got something private to say, I'll probably have a form for sending emails at
          some point. Until then, you can try one of the following:
        </p>
        <ul>
          <li><a href="https://twitter.com/AltConsts"><img src="//www.alteredconstants.com/inc/img/social-icons/twitter.png" alt="Twitter" title="Twitter" /></a></li>
          <li><a href="https://www.facebook.com/zeff.svoboda"><img src="//www.alteredconstants.com/inc/img/social-icons/facebook.png" alt="Facebook" title="Facebook" /></a></li>
          <li><a href="http://www.linkedin.com/pub/zeff-svoboda/b/316/297"><img src="//www.alteredconstants.com/inc/img/social-icons/linkedin.png" alt="LinkedIn" title="LinkedIn" /></a></li>
          <li><a href="https://www.youtube.com/user/AlteredConstants"><img src="//www.alteredconstants.com/inc/img/social-icons/youtube.png" alt="YouTube" title="YouTube" /></a></li>
          <li><a href="http://vimeo.com/alteredconstants"><img src="//www.alteredconstants.com/inc/img/social-icons/vimeo.png" alt="Vimeo" title="Vimeo" /></a></li>
        </ul>
      </MainSection>
    </article>
  );
}

export default createPage(Contact, { title: 'Contact' });
