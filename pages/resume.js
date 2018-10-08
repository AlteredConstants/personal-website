import React from "react";
import createPage from "component/createPage";
import MainSection from "component/MainSection";

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
      <MainSection title="Employment History">
        <section id="emp-miramar">
          <header>
            <h2>Miramar Technologies</h2>
            <h3>2017 – Present</h3>
          </header>
          <p>Software Engineering Consultant</p>
          <ul>
            <li>
              Developed full-stack employee management Web applications for a
              client company using Angular 5, SCSS, RxJS, .NET Web API and SQL
              Server.
            </li>
            <li>
              Designed build, test, and release processes using Angular CLI,
              Circle CI, and Node scripts, including detailed documentation for
              hand-off to client’s engineering team.
            </li>
            <li>
              Worked closely with Product, Design, and QA teams from various
              companies to define requirements and iterate quickly on rapidly
              evolving projects.
            </li>
            <li>
              Led engineering projects and participated in technical
              interviewing for both clients and the Miramar team.
            </li>
          </ul>
        </section>
        <section id="emp-code42">
          <section>
            <header>
              <h2>Code42</h2>
              <h3>2013 – 2016</h3>
            </header>
            <p>Software Engineer</p>
            <ul>
              <li>
                Developed new desktop client user interface for CrashPlan
                application using Web technologies including Electron,
                JavaScript (ES6/2015+), React.js, SCSS, Grunt, and Webpack.
              </li>
              <li>
                Maintained unit and integration testing coverage using Jasmine,
                Karma, and Mocha.
              </li>
              <li>
                Developed automated tests using Selenium, Capybara, and
                Cucumber/Spinach in a full-stack environment.
              </li>
              <li>
                Worked in several different styles of agile development,
                including scrum, and led feature teams.
              </li>
              <li>
                Worked closely with Product, UX, and Design to clearly define
                feature and project scope.
              </li>
              <li>
                Developed and maintained build and test automation systems using
                Ant, Node, Bash, and AWS EC2.
              </li>
            </ul>
            <p>Junior Windows Software Developer</p>
            <ul>
              <li>
                Developed desktop client user interfaces and the underlying
                service to support them using the .NET Framework, C#, and WPF.
              </li>
              <li>
                Redesigned and maintained build systems using Jenkins and
                MSBuild.
              </li>
              <li>
                Implemented and maintained branching strategies and dependency
                management for the project repositories using Git and NuGet.
              </li>
              <li>
                Developed and coordinated cross-platform automated testing tools
                for a full-stack environment using C#, Ruby, and Cucumber.
              </li>
            </ul>
          </section>
        </section>
        <section id="emp-3m">
          <header>
            <h2>3M Company, Library Systems</h2>
            <h3>2008 – 2013</h3>
          </header>
          <p>Software Development Technical Aide</p>
          <ul>
            <li>
              Developed testing and automation tools using C#, SQL Server, Win
              Forms, and WPF.
            </li>
          </ul>
        </section>
      </MainSection>

      <MainSection title="Education">
        <section id="edu-umn">
          <header>
            <h2>University of Minnesota, Minneapolis, MN</h2>
            <h3>Fall 2009 – Spring 2013</h3>
          </header>
          <ul>
            <li>Bachelor of Computer Engineering</li>
            <li>Linguistics Minor</li>
            <li>CIEE South Korea Scholarship Recipient (2011)</li>
            <li>CSE International Ambassador (2010–2011)</li>
          </ul>
        </section>
        <section id="edu-century">
          <header>
            <h2>Century College, White Bear Lake, MN</h2>
            <h3>Spring 2006 – Spring 2009</h3>
          </header>
          <ul>
            <li>
              Associate in Applied Science – Information and Telecommunications
              Technology (Spring 2008)
            </li>
            <li>Associate in Science – Engineering (Spring 2009)</li>
            <li>Associate in Science – Computer Science (Fall 2009)</li>
          </ul>
        </section>
      </MainSection>

      <MainSection title="Volunteer">
        <section id="vol-clojurebridge">
          <header>
            <h2>ClojureBridge MN</h2>
            <h3>2015 – 2016</h3>
          </header>
          <p>Teaching Assistant</p>
          <ul>
            <li>
              Taught core technology and software concepts to underrepresented
              groups.
            </li>
            <li>
              Helped create an inclusive, jargon-free space to improve the
              accessibility of the tech industry.
            </li>
          </ul>
        </section>
        <section id="vol-umfc">
          <header>
            <h2>University of Minnesota Fencing Club</h2>
            <h3>2012 – 2013</h3>
          </header>
          <p>President</p>
          <ul>
            <li>
              Coordinated fundraising events, large local tournaments, and
              interstate tournament travel.
            </li>
            <li>
              Delegated duties to fellow officers, managed finances, and ran a
              summer camp class.
            </li>
            <li>
              Interfaced with coaches, the university, and the regional
              collegiate conference.
            </li>
          </ul>
        </section>
      </MainSection>
    </article>
  );
}

export default createPage(Resume, { title: "Résumé of" });
