import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'

const firebaseConfig: Record<string | number | symbol, string | undefined> = {
    apiKey           : import.meta.env.VITE_APP_API_KEY,
    authDomain       : import.meta.env.VITE_APP_AUTH_DOMAIN,
    databaseURL      : import.meta.env.VITE_APP_DATABASE_URL,
    projectId        : import.meta.env.VITE_APP_PROJECT_ID,
    storageBucket    : import.meta.env.VITE_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
    appId            : import.meta.env.VITE_APP_APP_ID,
    measurementId    : import.meta.env.VITE_APP_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)
const Database = firebase.database()
const Store    = firebase.storage().ref()

export { Store, Database }
