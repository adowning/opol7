const functions = require('firebase-functions')
const admin = require('firebase-admin')
const stats = require('./lib/stats')
const stats_hardware = require('./lib/stats_hardware')
// const algolia = require('./lib/algolia')
admin.initializeApp(functions.config().firebase)

exports.countCreateProduct = stats.countCreateProduct
exports.countDeleteProduct = stats.countDeleteProduct
exports.countCreateHardware = stats_hardware.countCreateHardware
exports.countDeleteHardware = stats_hardware.countDeleteHardware

exports.locationUpdate = functions.https.onRequest((req, res) => {
  console.info(req.body)
  console.log(functions.config())
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
    return s4() + s4()
  }
  switch (req.body.action) {
    //sets the tablet id not the user
    case 'auth': {
      console.log(req.body)
      let tid = req.body.user + '_' + admin.database.ServerValue.TIMESTAMP
      // res.send({ error: false, trackid: tid })
      res.send({ error: false })
      break
    }
    case 'addtrack': {
      console.log(req.body)
      // let tid = req.body.track + '_' + admin.database.ServerValue.TIMESTAMP
      let tid = s4()
      // let tid = req.body.user + '_' + admin.database.ServerValue.TIMESTAMP
      res.send({ error: false, trackid: tid })
      break
    }
    case 'addpos':
      console.log('addpos trackid = ', req.body.trackid)
      // res.send({ error: false, trackid: 1 })
      res.send({ error: false })
      break

    default: {
      console.log('no action')
      res.send({ error: true, errormsg: 'noaction' })
      break
    }
    // res.send({ error: false })
    // console.log('req inc')
  }
})

const winston = require('winston')
const util = require('util')
const ClassicConsoleLoggerTransport = (winston.transports.CustomLogger = function(
  options
) {
  options = options || {}
  this.name = 'ClassicConsoleLoggerTransport'
  this.level = options.level || 'info'
  // Configure your storage backing as you see fit
})
util.inherits(ClassicConsoleLoggerTransport, winston.Transport)

ClassicConsoleLoggerTransport.prototype.log = function(
  level,
  msg,
  meta,
  callback
) {
  let args = [msg, '---', meta]
  switch (level) {
    case 'verbose':
    case 'debug':
      console.log.apply(null, args)
      break
    case 'notice':
    case 'info':
      console.info.apply(null, args)
      break
    case 'warn':
    case 'warning':
      console.warn.apply(null, args)
      break
    case 'error':
    case 'crit':
    case 'alert':
    case 'emerg':
      console.error.apply(null, args)
      break
    default:
      console.log.apply(null, args)
  }
  callback(null, true)
}
// exports.algoliaProductCreated = algolia.algoliaProductCreated
// exports.getSearchKey = algolia.getSearchKey
// // The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
// const functions = require('firebase-functions');

// // The Firebase Admin SDK to access the Firebase Realtime Database.
// const admin = require('firebase-admin');
// admin.initializeApp();
// const firestore = admin.firestore();

// exports.onUserStatusChanged = functions.database.ref('/status/{uid}').onUpdate(
//     (change, context) => {
//         console.log('update 4')
//         // Get the data written to Realtime Database
//         const eventStatus = change.after.val();

//         // Then use other event data to create a reference to the
//         // corresponding Firestore document.
//         const userStatusFirestoreRef = firestore.doc(`status/${context.params.uid}`);

//         // It is likely that the Realtime Database change that triggered
//         // this event has already been overwritten by a fast change in
//         // online / offline status, so we'll re-read the current data
//         // and compare the timestamps.
//         return change.after.ref.once('value').then((statusSnapshot) => {
//             const status = statusSnapshot.val();
//             // console.log(status, eventStatus);
//             // If the current timestamp for this data is newer than
//             // the data that triggered this event, we exit this function.
//             if (status.last_changed > eventStatus.last_changed) {
//                 console.log('this was no good')
//                 return null;
//             }
//             console.log('made it past');

//             // Otherwise, we convert the last_changed field to a Date
//             eventStatus.last_changed = new Date(eventStatus.last_changed);
//             console.log(eventStatus)

//             // ... and write it to Firestore.
//             return userStatusFirestoreRef.set(eventStatus);
//         });
//     });
// // [END presence_sync_function]

// // Take the text parameter passed to this HTTP endpoint and insert it into the
// // Realtime Database under the path /messages/:pushId/original
// exports.addMessage = functions.https.onRequest((req, res) => {
//     // Grab the text parameter.
//     const original = req.query.text;
//     // Push the new message into the Realtime Database using the Firebase Admin SDK.
//     return admin.database().ref('/messages').push({ original: original }).then((snapshot) => {
//         // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//         return res.redirect(303, snapshot.ref.toString());
//     });
// });
