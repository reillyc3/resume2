// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/Users/executive/website-dev/resume2/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("/Users/executive/website-dev/resume2/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("/Users/executive/website-dev/resume2/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-js": () => import("/Users/executive/website-dev/resume2/src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */),
  "component---src-pages-resume-js": () => import("/Users/executive/website-dev/resume2/src/pages/resume.js" /* webpackChunkName: "component---src-pages-resume-js" */)
}

exports.data = () => import("/Users/executive/website-dev/resume2/.cache/data.json")

