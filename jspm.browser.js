SystemJS.config({
  baseURL: "/",
  trace: true,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "alteredconstants-personal-website": "/",
    "src/*": "/*"
  }
});
