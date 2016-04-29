import Helmet from 'react-helmet';
import { renderToString } from 'react-dom/server';

export default function (component) {
  const app = renderToString(component);
  const { title, link } = Helmet.rewind();
  return `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      ${title}
      ${link}
      <script src="jspm_packages/system.js"></script>
      <script src="jspm.browser.js"></script>
      <script src="jspm.config.js"></script>
    </head>
    <body>
      <div id="react-content">${app}</div>
      <script>
        System.import('alteredconstants-personal-website');
      </script>
    </body>
    </html>
  `;
}
