const fs = require('fs')
const glob = require('glob')

// Libraries & helpers
const jstsNode = require('./lib/jsts-node.js')
const helpers = require('./lib/helpers.js')

// Site info
const site = require(`./site-info.js`)

// Gallery data
const galleries = require(`./galleries.js`)

// Check that all gallery titles are unique
galleries.map(gallery =>
  galleries.filter(item => item.title === gallery.title).length
).every(result => result === 1)
? console.log(`✔ All gallery titles unique`)
: console.error(`✘ Not all gallery titles are unique`)

// Compile css file
jstsNode.compile(
  `templates/style.css.jsts`,
  `..${site.stylesheet}`,
  {site, helpers}
)

console.log(`✔ CSS compiled`)

// Compile index file
jstsNode.compile(
  `templates/index.html.jsts`,
  `../index.html`,
  {site, galleries, helpers}
)

console.log(`✔ Index page built`)

// Compile search file
jstsNode.compile(
  `templates/search.html.jsts`,
  `../search.html`,
  {site, galleries, helpers}
)

console.log(`✔ Search page built`)

// Compile gallery files
galleries.forEach(gallery =>

  jstsNode.compile(
    `templates/gallery.html.jsts`,
    `../gallery/${helpers.slug(gallery.title)}.html`,
    {
      site,
      gallery,
      helpers,
      randomImage: gallery.images[
        Math.floor(Math.random() * gallery.images.length)
      ]
    }
  )

)

console.log(`✔ Gallery pages built`)

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
    `templates/tag.html.jsts`,
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

console.log(`✔ Tag pages built`)

// Generate sitemap file
fs.writeFileSync(`../sitemap.txt`,

  glob.sync(`../**/*.html`)
    .map(path => path.replace(/^..\//, `https://bengalcat.party/`))
    .join(`\n`)

)

console.log(`✔ Sitemap.txt generated`)