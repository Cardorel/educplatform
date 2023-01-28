import { useIdToken } from "react-firebase-hooks/auth";
import { doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { authentification, fs } from "../../firebase/config";

export const useFetchAsyncDocumentById = (collectionName) => {
  const [user] = useIdToken(authentification);
  const [value, loading] = useDocument(doc(fs, collectionName, user?.uid), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return {
    ...value?.data(),
    loading,
  };
};
