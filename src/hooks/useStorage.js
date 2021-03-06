import { useState, useEffect } from "react";
import { storage, firestore, timestamp } from "../firebase";

function useStorage(image, typeOfAnimal) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = storage.ref(image.name);
    console.log(typeOfAnimal);
    const collectionRef = firestore.collection(typeOfAnimal);

    storageRef.put(image).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        await collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [image]);

  return { progress, url, error };
}

export default useStorage;
