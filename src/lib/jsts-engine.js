// Interpolate string as JS template string
// Supply objects you want available as the {environment} object
// Returns an array: ['string', {output}]
module.exports = function(string = '', environment = {}) {

  return new Function(

    [...Object.keys(environment), 'output={}'],

    'return [`' + string + '`, output]'

  ).apply(null, Object.values(environment))

}