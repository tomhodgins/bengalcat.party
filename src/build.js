// Node modules
const fs = require('fs')
const glob = require('glob')

// Libraries & helpers
const jstsNode = require('./lib/jsts-node.js')
const helpers = require('./lib/helpers.js')

// Gallery data
const galleries = require('./galleries.js')

// Site info
const site = require('./site-info.js')

// Compile css file
jstsNode.compile('templates/style.css.jsts', '..' + site.stylesheet)

// Compile index file
jstsNode.compile(
  'templates/index.html.jsts',
  '../index.html',
  {site, galleries, ...helpers}
)

// Compile gallery files
galleries.forEach(gallery =>

  jstsNode.compile(
    'templates/gallery.html.jsts',
    `../gallery/${helpers.slug(gallery.title)}.html`,
    {site, gallery, ...helpers}
  )

)

// Generate sitemap file
fs.writeFileSync('../sitemap.txt',

  glob.sync('../**/*.html')
    .map(path => path.replace(/^..\//, 'https://bengalcat.party/'))
    .join('\n')

)