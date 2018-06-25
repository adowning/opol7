import * as Functions from 'firebase-functions'
import * as Admin from 'firebase-admin'
Admin.initializeApp(Functions.config().firebase)

exports.addMessage = Functions.https.onCall((data, context) => {
  const text = data.text
  // Authentication / user information is automatically added to the request.
  const uid = context.auth.uid
  const name = context.auth.token.name || null
  const picture = context.auth.token.picture || null
  const email = context.auth.token.email || null
c
  return {
    text,
  }
})
