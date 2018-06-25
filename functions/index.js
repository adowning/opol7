const functions = require('firebase-functions')
const admin = require('firebase-admin')
const stats = require('./lib/stats')
const stats_hardware = require('./lib/stats_hardware')
// const es7 = require('./lib/es7')
// const algolia = require('./lib/algolia')
admin.initializeApp(functions.config().firebase)

exports.countCreateProduct = stats.countCreateProduct
exports.countDeleteProduct = stats.countDeleteProduct
exports.countCreateHardware = stats_hardware.countCreateHardware
exports.countDeleteHardware = stats_hardware.countDeleteHardware

exports.locationUpdate = functions.https.onRequest((req, res) => {
  var locs = []
  locs = req.body
  console.warn(locs[0])
  res.send({ error: false })
})

// const winston = require('winston')
// const util = require('util')
// const ClassicConsoleLoggerTransport = (winston.transports.CustomLogger = function(
//   options
// ) {
//   options = options || {}
//   this.name = 'ClassicConsoleLoggerTransport'
//   this.level = options.level || 'info'
//   // Configure your storage backing as you see fit
// })
// util.inherits(ClassicConsoleLoggerTransport, winston.Transport)

// ClassicConsoleLoggerTransport.prototype.log = function(
//   level,
//   msg,
//   meta,
//   callback
// ) {
//   let args = [msg, '---', meta]
//   switch (level) {
//     case 'verbose':
//     case 'debug':
//       console.log.apply(null, args)
//       break
//     case 'notice':
//     case 'info':
//       console.info.apply(null, args)
//       break
//     case 'warn':
//     case 'warning':
//       console.warn.apply(null, args)
//       break
//     case 'error':
//     case 'crit':
//     case 'alert':
//     case 'emerg':
//       console.error.apply(null, args)
//       break
//     default:
//       console.log.apply(null, args)
//   }
//   callback(null, true)
// }
