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
  {site, galleries, helpers}
)

// Compile search file
jstsNode.compile(
  'templates/search.html.jsts',
  '../search.html',
  {site, galleries, helpers}
)

// Compile gallery files
galleries.forEach(gallery =>

  jstsNode.compile(
    'templates/gallery.html.jsts',
    `../gallery/${helpers.slug(gallery.title)}.html`,
    {site, gallery, helpers}
  )

)

// Find all tags
const tags = galleries

  .reduce((acc, gallery) => {

    gallery.keywords.trim().toLowerCase().split(/\s+/)

      .forEach(tag => {

        if (!acc.includes(tag)) {

          acc.push(tag)

        }

      })

    return acc

  }, [])

// Compile found tags to pages
tags.forEach(tag => {

  const tagged = galleries

    .reduce((acc, gallery) => {

      if (gallery.keywords.trim().toLowerCase().split(/\s+/).includes(tag)) {

        acc.push(gallery)

      }

      return acc

    }, [])

  jstsNode.compile(
    'templates/tag.html.jsts',
    `../tags/${helpers.slug(tag)}.html`,
    {
      site,
      helpers,
      tag,
      tagged,
      upperCaseTag: tag[0].toUpperCase() + tag.substring(1)
    }
  )

})

// Generate sitemap file
fs.writeFileSync('../sitemap.txt',

  glob.sync('../**/*.html')
    .map(path => path.replace(/^..\//, 'https://bengalcat.party/'))
    .join('\n')

)