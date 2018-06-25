require('dotenv').load()
// var Assert = require('assert')
// var Sandbox = require('sandboxjs')
// var code = 'module.exports = function (ctx, cb) { cb(null, "hello world"); }'
// var profile = Sandbox.fromToken(process.env.WEBTASK_TOKEN)

// // This library lets you create a webtask and run it in one step as a shortcut
// profile.run(code, function(err, res, body) {
//   Assert.ifError(err)
//   Assert.equal(res.statusCode, 200, 'The webtask executed as expected')
//   Assert.equal(body, 'hello world', 'The webtask returned the expected string')
// })
var Assert = require('assert')
var Sandbox = require('sandboxjs')

var code = 'module.exports = function (ctx, cb) { cb(null, "hello world"); }'
var profile = Sandbox.fromToken(process.env.WEBTASK_TOKEN)

// This library lets you create a webtask and returns the URL:
profile.create(code, { secrets: { auth0: 'rocks' } }, function(err, webtask) {
  Assert.ifError(err)
  console.log(webtask.url)
})
