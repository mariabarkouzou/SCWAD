import React, { useEffect } from "react";
import useStorageCat from "../hooks/useStorageCat";
import { motion } from "framer-motion";

function ProgressBarCat({ image, setImage }) {
  const { progress, url } = useStorageCat(image);

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

export default ProgressBarCat;
