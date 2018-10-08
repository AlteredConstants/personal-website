import React from "react";
import createPage from "component/createPage";
import MainSection from "component/MainSection";

function yearsSince(year) {
  const years = new Date().getFullYear() - year;
  return years === 1 ? "1 year" : `${years} years`;
}

function Resume() {
  return (
    <article>
      <style jsx>{`
        h2 {
          font-family: "Source Sans Pro", Arial, sans-serif;
          text-transform: uppercase;
          font-size: 1em;
          font-style: normal;
          margin-bottom: 0;
          letter-spacing: 0.15em;
        }
        h3 {
          font-family: "Source Sans Pro", Arial, sans-serif;
          font-style: italic;
          text-transform: uppercase;
          font-size: 0.9em;
          margin-top: 0;
          letter-spacing: 0.15em;
        }
      `}</style>
      <MainSection title="Objectives">
        <ul>
          <li>
            Continue to develop my love for the Web and software design through
            exciting projects and new technologies.
          </li>
          <li>
            Contribute to best-practice design for the healthy, sustainable
            growth of the Web.
          </li>
          <li>
            Further improve my software development and project management
            skills.
          </li>
          <li>
            Work with an equally enthusiastic team to inspire and drive me
            toward all of the above.
          </li>
        </ul>
      </MainSection>

      {/*
      <MainSection title="Work Strengths">
        <ul>
          <li>Excellent logical problem solving skills.</li>
          <li>Step-by-step troubleshooting skills.</li>
          <li>Friendly and helpful to customers and coworkers.</li>
          <li>Very high dedication to quality of work.</li>
          <li>Eager to expand knowledge and experience.</li>
          <li>Works well both alone and in groups.</li>
          <li>Strong teaching ability.</li>
          <li>Fast learner.</li>
        </ul>
      </MainSection>
      */}

      <MainSection title="Web">
        <p>
          {yearsSince(2001)} of experience with Web programming and design
          technologies and best practices.
        </p>
        <ul>
          <li>
            <p>
              Front-end design using HTML5/XHTML, JavaScript, React.js,
              CSS3/SCSS, and Photoshop/GIMP.
            </p>
          </li>
          <li>
            <p>
              Build and dependency management using Grunt, NPM, and Webpack.
            </p>
          </li>
          <li>
            <p>
              Semantic and structured information design using (X)HTML, XML,
              XSD, XPath, and XSLT.
            </p>
          </li>
          <li>
            <p>
              Back-end programming and database design using PHP, MySQL,
              Node.js.
            </p>
          </li>
        </ul>
      </MainSection>

      <MainSection title="Software">
        <p>
          {yearsSince(2001)} of experience with software design and development
          and
          {yearsSince(2008)} of experience in a software development work
          environment.
        </p>
        <ul>
          <li>
            <p>
              Procedural, object-oriented, functional, logic, and shell
              programming languages including C#, C/C++, JavaScript, Ruby, PHP,
              Python, Scheme/LISP, Haskell, SML, Prolog, BASH, GNU Make.
            </p>
          </li>
          <li>
            <p>
              The Microsoft Visual Studio IDE including .NET framework 2/3/4,
              Windows Forms, WPF, and Windows Phone development.
            </p>
          </li>
          <li>
            <p>
              Design patterns and principles including Test-Driven Development,
              Inversion of Control/Dependency Injection, Open/Closed Principle,
              and Separation of Concerns.
            </p>
          </li>
          <li>
            <p>
              Software version control systems including Git, Mercurial, and
              Perforce.
            </p>
          </li>
        </ul>
      </MainSection>

      <MainSection title="System Administration">
        <p>
          {yearsSince(2002)} years of experience with various operating systems
          and server and network technologies.
        </p>
        <ul>
          <li>
            <p>
              Linux Web server design using Apache, Nginx, PHP/MySQL services,
              BIND, ISC DHCP.
            </p>
          </li>
          <li>
            <p>
              Windows, Mac OS, Ubuntu, iOS, Android, Windows Phone, and Cygwin
              environments.
            </p>
          </li>
          <li>
            <p>
              Virtualization environments using VMware, Linux KVM, and HyperV.
            </p>
          </li>
          <li>
            <p>Network hardware and software on Cisco routers and switches.</p>
          </li>
          <li>
            <p>
              Routing protocols and other network standards and their
              implementation in Cisco IOS and Linux including RIP, IGRP/EIGRP,
              OSPF, STP, VTP, VLANs, NAT, DHCP, ACLs, link aggregation.
            </p>
          </li>
        </ul>
      </MainSection>

      <MainSection title="Employment History">
        <section id="emp-code42">
          <section>
            <header>
              <h2>2015 – Present</h2>
              <h3>Code42</h3>
            </header>
            <p>Software engineer</p>
            <ul>
              <li>
                Developed desktop client user interfaces using Web technologies
                such as Electron, JavaScript (ES6), React.js, SCSS, Grunt.
              </li>
              <li>
                Worked closely with Product, UX, and Design to clearly define
                feature and project scope.
              </li>
              <li>
                Responsible for tracking and ensuring completeness and
                correctness of a major component of the application.
              </li>
              <li>
                Developed automated tests using Selenium, Capybara, and Spinach
                in a full-stack environment.
              </li>
            </ul>
          </section>
          <section>
            <header>
              <h2>2013 – 2015</h2>
              <h3>Code42</h3>
            </header>
            <p>Junior Windows software developer</p>
            <ul>
              <li>
                Developed desktop client user interfaces and the underlying
                service to support them using the .NET Framework and WPF.
              </li>
              <li>
                Redesigned and maintained build systems using Jenkins and
                MSBuild.
              </li>
              <li>
                Implemented and maintained branching strategies and dependency
                management for the project repositories.
              </li>
              <li>
                Developed and coordinated cross-platform automated testing tools
                for a full-stack environment.
              </li>
            </ul>
          </section>
        </section>
        <section id="emp-3m">
          <header>
            <h2>2008 – 2013</h2>
            <h3>3M Company, Library Systems</h3>
          </header>
          <p>Software development technical aide</p>
          <ul>
            <li>Assisted developers with primary development projects.</li>
            <li>Created testing and automation tools for developers.</li>
          </ul>
        </section>
        <section id="emp-century">
          <header>
            <h2>2007 – 2008</h2>
            <h3>Century Community and Technical College</h3>
          </header>
          <p>Fabrication Lab technical assistant</p>
          <ul>
            <li>
              Set up and maintained control computers for fabrication equipment.
            </li>
          </ul>
        </section>
        <section id="emp-self-employed">
          <header>
            <h2>2003 – Present</h2>
            <h3>Self-employed</h3>
          </header>
          <p>Technical support and Web development</p>
        </section>
        <section id="emp-central">
          <header>
            <h2>2002 – 2005</h2>
            <h3>St. Paul Central High School</h3>
          </header>
          <p>Volunteer technical support</p>
        </section>
      </MainSection>

      <MainSection title="Education">
        <section id="edu-umn">
          <header>
            <h2>Fall 2009 – Spring 2013</h2>
            <h3>University of Minnesota, Minneapolis, MN</h3>
          </header>
          <ul>
            <li>Bachelor of Computer Engineering</li>
            <li>Linguistics Minor</li>
            <li>University Honors Program</li>
          </ul>
          <p>GPA: 3.544 (100 credits)</p>
          <p>Extra-curricular:</p>
          <ul>
            <li>
              Study Abroad
              <ul>
                <li>
                  Japan (Summer 2010) – Intensive Japanese Language Program
                </li>
                <li>
                  South Korea (Spring 2011) – CIEE South Korea Scholarship
                  Recipient
                </li>
                <li>China (Summer 2011) – Digital Technology Seminar</li>
              </ul>
            </li>
            <li>President of the Fencing Club (2012–2013)</li>
            <li>CSE International Ambassador (2010–2011)</li>
          </ul>
        </section>
        <section id="edu-century">
          <header>
            <h2>Spring 2006 – Spring 2009</h2>
            <h3>Century College, White Bear Lake, MN</h3>
          </header>
          <ul>
            <li>
              Associate in Applied Science – Information and Telecommunications
              Technology (Spring 2008)
            </li>
            <li>Associate in Science – Engineering (Spring 2009)</li>
            <li>Associate in Science – Computer Science (Fall 2009)</li>
            <li>Associate in Arts (Spring 2010)</li>
          </ul>
          <p>
            Overall GPA: 3.88 (152 credits), Technical GPA: 3.86, High
            Distinction
          </p>
        </section>
        <section id="edu-central">
          <header>
            <h2>Fall 2001 – Spring 2005</h2>
            <h3>St. Paul Central High School, St. Paul, MN</h3>
          </header>
        </section>
      </MainSection>
    </article>
  );
}

export default createPage(Resume, { title: "Résumé of" });
