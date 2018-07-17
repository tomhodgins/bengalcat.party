const fs = require('fs')
const glob = require('glob')
const {compile} = require('jsts-node')

// Site info
const site = require('./site-info.js')

// Helper functions
const helpers = require('./helpers.js')

// Gallery data
const galleries = require('./galleries.js')

// Compile in dev mode
if (process.argv[2] === 'dev') {

  console.log(`🚨🚨 HACKER ALERT! 🚨🚨`)
  console.log(`Running in DEVELOPMENT mode`)
  site.url = process.cwd().split('/src')[0] + '/'
  console.log(`Site URL output as ${site.url}`)

}

// Check that all gallery titles are unique
galleries.map(gallery =>
  galleries.filter(item => item.title === gallery.title).length
).every(result => result === 1)
? console.log(`✔ All gallery titles unique`)
: console.error(`✘ Not all gallery titles are unique`)

// Compile css file
compile(
  `templates/style.css.jsts`,
  `../${site.stylesheet}`,
  {site, helpers}
)

console.log(`✔ CSS compiled`)

// Compile index file
compile(
  `templates/index.html.jsts`,
  `../index.html`,
  {site, galleries, helpers}
)

console.log(`✔ Index page built`)

// Compile search file
compile(
  `templates/search.html.jsts`,
  `../search.html`,
  {site, galleries, helpers}
)

console.log(`✔ Search page built`)

// Compile gallery files
galleries.forEach(gallery =>

  compile(
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

  compile(
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
    .map(path => path.replace(/^..\//, site.url))
    .join(`\n`)

)

console.log(`✔ Sitemap.txt generated`)