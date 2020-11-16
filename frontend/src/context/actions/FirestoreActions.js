import { firestore } from "../../firebase/Config"

export const addData = async (collection, data) => {
  let storeRef = firestore.collection(collection)
  await storeRef.add(data).catch((err) => console.log(err))
}
