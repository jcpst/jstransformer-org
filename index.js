'use strict'

const org = require('org')
const parser = new org.Parser()

exports.name = 'org'
exports.outputFormat = 'html'
exports.inputFormats = ['org']
exports.render = function (str, options) {
  return parser.parse(str).convert(org.ConverterHTML, options).toString()
}
