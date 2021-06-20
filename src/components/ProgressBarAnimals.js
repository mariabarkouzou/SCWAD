import React, { useEffect } from "react";
import useStorageAnimals from "../hooks/useStorageAnimals";
import { motion } from "framer-motion";

function ProgressBarAnimals({ image, setImage }) {
  const { progress, url } = useStorageAnimals(image);

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

export default ProgressBarAnimals;
