import { storage } from "../../firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const uploadFile = async (file, setImgUrl) => {
  if (!file) return;
  var storageRef = await ref(storage, `files/${file.name}`);
  uploadBytesResumable(storageRef, file).then(() => {
    getDownloadURL(storageRef).then(function (url) {
      setImgUrl(url);
    });
  });
};
