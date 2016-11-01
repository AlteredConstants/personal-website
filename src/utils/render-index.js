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
    </head>
    <body>
      <div id="react-content">${app}</div>
      <script src="static/bundle.js"></script>
    </body>
    </html>
  `;
}
