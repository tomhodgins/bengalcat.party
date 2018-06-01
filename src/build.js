// Node modules
const fs = require('fs')
const glob = require('glob')

// Libraries & helpers
const jstsNode = require('./lib/jsts-node.js')
const helpers = require('./lib/helpers.js')

// Site info
const site = require('./site-info.js')

// Gallery data
const galleries = require('./galleries.js')

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

// Find all tags and sort in alphabetical order
const tags = galleries

  .reduce((acc, gallery) => {

    const keywords = gallery.keywords.split(' ')

    for (tag in keywords) {

      if (!acc.includes(keywords[tag])) {

        acc.push(keywords[tag])

      }

    }

    return acc

  }, [])

  .sort((a, b) => {

    if (a[0] > b[0]) {

      return 1

    } else if (a[0] < b[0]) {

      return -1

    } else {

      return 0

    }

  })

// Compile found tags to pages
tags.forEach(tag => {

  const tagged = galleries

    .reduce((acc, gallery) => {

      if (gallery.keywords.split(' ').includes(tag)) {

        acc.push(gallery)

      }

      return acc

    }, [])

  jstsNode.compile(
    'templates/tag.html.jsts',
    `../tags/${helpers.slug(tag)}.html`,
    {site, ...helpers, tag, tagged}
  )

})