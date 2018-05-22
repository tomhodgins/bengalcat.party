const fs = require('fs')
const glob = require('glob')

module.exports = {

  load: (path='*.tl') =>
    glob.sync(path)
      .map(file => fs.readFileSync(file).toString()),
      // array of strings from file contents matching path

  interpolate: (string='', objects={}) =>
    new Function(Object.keys(objects), 'return `' + string + '`')
      .apply(null, Object.values(objects)),
      // string interpolated as a JS template string

  process: (files=[], objects={}) =>
    files
      .map(file => module.exports.interpolate(file, objects)),
      // array of interpolated strings

  output: (filename='', files=[]) =>
    fs.writeFileSync(filename, files.join('\n')),
    // file containing strings from array

  compile: (path='*.tl', filename='output.txt', objects={}) =>
    module.exports.output(
      filename,
      module.exports.process(module.exports.load(path), objects)
    )

}