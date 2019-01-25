// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/executive/website-dev/resume2/src/pages/404.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/executive/website-dev/resume2/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/executive/website-dev/resume2/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/executive/website-dev/resume2/src/pages/projects.js")),
  "component---src-pages-resume-js": preferDefault(require("/Users/executive/website-dev/resume2/src/pages/resume.js"))
}

