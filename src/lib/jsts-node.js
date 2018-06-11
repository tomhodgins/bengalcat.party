const fs = require('fs')
const glob = require('glob')
const jstsEngine = require('./jsts-engine.js')

module.exports.load = function(path='*.jsts') {

  return glob.sync(path)
    .map(filename => fs.readFileSync(filename).toString())

}

module.exports.process = function(files=[], objects={}) {

  return Array.isArray(files)
         ? files.map(file => jstsEngine(file, objects))
         : jstsEngine(files, objects)

}

module.exports.output = function(files=[], filename='out.txt') {

  return fs.writeFileSync(
           filename,
           files
             .map(files => files[0])
             .join('\n')
         )

}

module.exports.compile = function(path='*.jsts', filename='out.txt', objects={}) {

  return module.exports.output(
    module.exports.process(
      module.exports.load(path),
      objects
    ),
    filename
  )

}