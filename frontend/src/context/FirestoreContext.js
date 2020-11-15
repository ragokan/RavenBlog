import { useState, useEffect } from "react"
import { firestore } from "../firebase/Config"

const FirestoreContext = (collection) => {
  const [docs, setDocs] = useState([])

  useEffect(
    () => {
      const unsub = firestore
        .collection(collection)
        .orderBy("createdAt", "asc")
        .onSnapshot((snap) => {
          let documents = []
          snap.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id })
          })
          setDocs(documents)
        })

      return () => unsub()
    },
    /* eslint-disable */ [collection]
  )

  return { docs }
}

export default FirestoreContext
