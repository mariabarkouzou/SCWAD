import React, { useEffect } from "react";
import useStorageDog from "../hooks/useStorageDog";
import { motion } from "framer-motion";

function ProgressBarDog({ image, setImage }) {
  const { progress, url } = useStorageDog(image);

  useEffect(() => {
    if (url) {
      setImage(null);
    }
  }, [url, setImage]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
}

export default ProgressBarDog;
