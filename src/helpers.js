module.exports.logo = `
▄▄▄▄· ▄▄▄ . ▐ ▄  ▄▄ •  ▄▄▄· ▄▄▌   ▄▄·  ▄▄▄· ▄▄▄▄▄    ▄▄▄· ▄▄▄· ▄▄▄  ▄▄▄▄▄ ▄· ▄▌
▐█ ▀█▪▀▄.▀·•█▌▐█▐█ ▀ ▪▐█ ▀█ ██•  ▐█ ▌▪▐█ ▀█ •██     ▐█ ▄█▐█ ▀█ ▀▄ █·•██  ▐█▪██▌
▐█▀▀█▄▐▀▀▪▄▐█▐▐▌▄█ ▀█▄▄█▀▀█ ██▪  ██ ▄▄▄█▀▀█  ▐█.▪    ██▀·▄█▀▀█ ▐▀▀▄  ▐█.▪▐█▌▐█▪
██▄▪▐█▐█▄▄▌██▐█▌▐█▄▪▐█▐█ ▪▐▌▐█▌▐▌▐███▌▐█ ▪▐▌ ▐█▌·   ▐█▪·•▐█ ▪▐▌▐█•█▌ ▐█▌· ▐█▀·.
·▀▀▀▀  ▀▀▀ ▀▀ █▪·▀▀▀▀  ▀  ▀ .▀▀▀ ·▀▀▀  ▀  ▀  ▀▀▀  ▀ .▀    ▀  ▀ .▀  ▀ ▀▀▀   ▀ •
`

module.exports.slug = function(string='') {

  return string.toLowerCase().replace(/\W/g, '-')

}

module.exports.shuffle = function(array=[]) {

  for (let i = array.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1))

    const temp = array[i]

    array[i] = array[j]

    array[j] = temp

  }

  return array

}

module.exports.months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

module.exports.upperCaseTag = function(string='') {

  return string
    .split('-')
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join('-')

}

module.exports.randomArrayItem = function(array=[]) {

  return array[Math.floor(Math.random() * array.length)]

}