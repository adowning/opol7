// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
const firestore = admin.firestore();


exports.onUserStatusChanged = functions.database.ref('/status/{uid}').onUpdate(
    (change, context) => {
        console.log('update 4')
        // Get the data written to Realtime Database
        const eventStatus = change.after.val();

        // Then use other event data to create a reference to the
        // corresponding Firestore document.
        const userStatusFirestoreRef = firestore.doc(`status/${context.params.uid}`);

        // It is likely that the Realtime Database change that triggered
        // this event has already been overwritten by a fast change in
        // online / offline status, so we'll re-read the current data
        // and compare the timestamps.
        return change.after.ref.once('value').then((statusSnapshot) => {
            const status = statusSnapshot.val();
            // console.log(status, eventStatus);
            // If the current timestamp for this data is newer than
            // the data that triggered this event, we exit this function.
            if (status.last_changed > eventStatus.last_changed) {
                console.log('this was no good')
                return null;
            }
            console.log('made it past');

            // Otherwise, we convert the last_changed field to a Date
            eventStatus.last_changed = new Date(eventStatus.last_changed);
            console.log(eventStatus)

            // ... and write it to Firestore.
            return userStatusFirestoreRef.set(eventStatus);
        });
    });
// [END presence_sync_function]


// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest((req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    return admin.database().ref('/messages').push({ original: original }).then((snapshot) => {
        // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
        return res.redirect(303, snapshot.ref.toString());
    });
});