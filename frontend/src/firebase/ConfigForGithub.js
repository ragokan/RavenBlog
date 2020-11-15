import firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"

import { useCollectionData } from "react-firebase-hooks/firestore"

// I added real Config.js file to gitignore
// If you want to work with this, just add your config below and change the filename to "Config.js"

const firebaseConfig = {
  // Your config will be here
}

firebase.initializeApp(firebaseConfig)

let firestore = firebase.firestore()
let storage = firebase.storage()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { firestore, useCollectionData, timestamp, storage }
