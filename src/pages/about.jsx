import React from 'react';
import Helmet from 'react-helmet';

export default function About() {
  return (
    <div>
      <Helmet title="About" />
      <section id="about-site">
        <header>
          <h1>About the Site</h1>
        </header>
        <p>
          This website is the personal website for Zeff Svoboda, his projects, and other such
          nonsense.
        </p>
      </section>

      <section id="about-me">
        <header>
          <h1>About the Person</h1>
        </header>
        <p>
          Zeff Svoboda is a software engineer, a natural language enthusiast, an amateur filmmaker
          well out of practice, and an unabashed, multifaceted geek. Through self-taught,
          peer-taught, and formal education, he has explored everything from Web and software
          development, electronics design, and system and network administration to green tech and
          politics, automotive and bicycle mechanics, urban planning, and business management. A
          modest, sociable introvert with a passion for learning and sharing, he hates writing in
          the third person (but someone's gotta do it).
        </p>
        <p>
          Born and raised in the Twin Cities, Zeff earned his bachelor's degree in Computer
          Engineering with a minor in Linguistics from the University of Minnesota. He has spent the
          last decade honing his software development skills, starting from
          humble <abbr title="Hypertext Markup Language">HTML</abbr> websites full
          of <code>&lt;table&gt;</code>s and bad graphics through to complex, modular,
          testable <abbr title="Application Programming Interfaces">APIs</abbr>{' '}
          and <abbr title="User Interfaces">UIs</abbr> for Web, desktop, and phone platforms. His
          primary areas of interest include Web frameworks and standards, Natural Language
          Processing, and formal language design.
        </p>
        <p>
          Beside software, Zeff enjoys recreational cycling and fencing, dabbles in Eastern martial
          arts, and has an undying crush on East Asian culture and history (though not so
          much <em>anime</em> or <em>manga</em>). He has studied the Japanese language for several
          years and has visited Japan, South Korea, and China and is looking forward to returning to
          the region. He also enjoys intellectual debates on subjects such as environmentalism,
          gender identity, politics, and economics (to name a few).
        </p>
      </section>

      <section id="about-name">
        <header>
          <h1>About the Name</h1>
        </header>
        <p>The reasons I chose this domain name are three-fold:</p>
        <ol>
          <li>
            a play on words, making light of the notion of mutable "constants" in programming
            languages like C++;
          </li>
          <li>
            a philosophical acknowledgement of the equally absurd "constant change" dichotomy of
            reality; and
          </li>
          <li>
            a reference to a track by Boards of Canada, one of my favorite musical groups,
            called <cite>"Constants Are Changing"</cite> from their 2005 release <cite>The Campfire
            Headphase</cite> which seemed like too long of a name for a website on its own.
          </li>
        </ol>
      </section>
    </div>
  );
}
