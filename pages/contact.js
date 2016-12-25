import React from 'react';
import { NextUrlType } from '../component/types';
import Page from '../component/page';

export default function Contact({ url }) {
  return (
    <Page title="Contact" pathname={url.pathname}>
      <section id="the-basics">
        <header>
          <h1>Contact</h1>
        </header>
        <p>
          At the moment, the best place to contact me is probably
          Twitter <a href="https://twitter.com/AltConsts">@AltConsts</a>.
        </p>
        <p>
          If you've got something private to say, I'll probably have a form for sending emails at
          some point. Until then, you can try one of the following:
        </p>
        <ul className="flat-menu">
          <li><a href="https://twitter.com/AltConsts"><img src="//www.alteredconstants.com/inc/img/social-icons/twitter.png" alt="Twitter" title="Twitter" /></a></li>
          <li><a href="https://www.facebook.com/zeff.svoboda"><img src="//www.alteredconstants.com/inc/img/social-icons/facebook.png" alt="Facebook" title="Facebook" /></a></li>
          <li><a href="https://plus.google.com/113609498638047088528"><img src="//www.alteredconstants.com/inc/img/social-icons/google-plus.png" alt="Google+" title="Google+" /></a></li>
          <li><a href="http://www.linkedin.com/pub/zeff-svoboda/b/316/297"><img src="//www.alteredconstants.com/inc/img/social-icons/linkedin.png" alt="LinkedIn" title="LinkedIn" /></a></li>
          <li><a href="https://www.youtube.com/user/AlteredConstants"><img src="//www.alteredconstants.com/inc/img/social-icons/youtube.png" alt="YouTube" title="YouTube" /></a></li>
          <li><a href="http://vimeo.com/alteredconstants"><img src="//www.alteredconstants.com/inc/img/social-icons/vimeo.png" alt="Vimeo" title="Vimeo" /></a></li>
        </ul>
      </section>
    </Page>
  );
}

Contact.propTypes = {
  url: NextUrlType,
};
