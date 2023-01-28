import { firestore, getCollectionInFireBase } from "../../firebase/config";

export const useFetchAsyncCollection = async (collectionName) => {
  const collectionRef = firestore.collection(collectionName);
  return await collectionRef.get().then(async (snapshot) => {
    return await getCollectionInFireBase(snapshot);
  });
};
