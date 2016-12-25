import React from 'react';
import Link from 'next/prefetch';
import { NextUrlType } from '../component/types';
import Page from '../component/page';

export default function License({ url }) {
  return (
    <Page title="License" pathname={url.pathname}>
      <section id="copyright-blurb">
        <header>
          <h1>Copyright</h1>
        </header>
        <p>
          Copyright is a tricky subject. While I fully support the original purpose of copyright
          law—to incentivize authors and inventors to create more to share—I am disappointed in what
          it has become.
        </p>
        <figure>
          <iframe
            width="560" height="315"
            src="//www.youtube.com/embed/tk862BbjWx4"
            frameBorder="0"
            allowFullScreen
          />
          <figcaption>by <a href="http://www.cgpgrey.com/">C.G.P. Grey</a></figcaption>
        </figure>
        <p>
          And while I fully respect everyone's individual right to choose how best to share their
          works and make a living, I must abstain from "business as usual". If someone sees value in
          what I share and thinks they can improve upon (or make money from) my work, they have my
          blessing. I hope that my contribution to the inherently collaborative process of human
          expression and knowledge helps inspire others to join in.
        </p>
        <p>
          However, in order to promote my ideals, I retain all rights provided by US and
          international copyright law. Counter-intuitive as it might seem, this is a requirement for
          "<a href="https://en.wikipedia.org/wiki/Copyleft">copyleft</a>" licensing.
        </p>
      </section>

      <section id="licensing">
        <header>
          <h1>Licensing</h1>
        </header>
        <p>
          All content on this site (alteredconstants.com) is licensed under
          a <a href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons
          Attribution-ShareAlike 3.0 Unported License</a> unless otherwise noted or attributed.
          Basically<sup>*</sup>, you can use my works in whatever way you see fit (including
          commercial endeavors), so long as you adhere to the following requirements:
        </p>
        <ol>
          <li>
            Include a credit or byline to either me (Zeff Svoboda) or my site
            ("alteredconstants.com" or "Altered Constants" if a link is otherwise provided) in a
            clear and obvious (though not necessarily obtrusive) way.
          </li>
          <li>Share my work or any changes made to it under the same or similar license.</li>
          <li>
            <b>(Optional<sup>†</sup>)</b> A link back to the original source on this site or the
            main page would be appreciated.
          </li>
          <li>
            <b>(Optional)</b> <Link href="/contact">Let me know</Link> what you're doing (or planning
            to do) with it—I'd love to hear about your project.
          </li>
        </ol>
      </section>

      <footer>
        <p>
          <small>
            * While I am an amateur law geek, I don't claim to know the intricate details of
            licensing. Thus, in the event of any conflict between what I say and what
            the <a href="http://creativecommons.org/licenses/by-sa/3.0/legalcode">CC-BY-SA 3.0 legal code</a> says,
            the legal code is to be considered binding. See the
            "<a href="http://creativecommons.org/licenses/by-sa/3.0/">human-readable</a>"
            version if you're a mere mortal.
          </small>
        </p>
        <p>
          <small>
            † Yes, optional requirements. I can't explicitly enforce these through the license and
            I'm not sure I would in any case, but they are in keeping with my ideals of
            collaborative creation.
          </small>
        </p>
      </footer>
    </Page>
  );
}

License.propTypes = {
  url: NextUrlType,
};
