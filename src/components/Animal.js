import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";

function Animal({typeOfAnimal}) {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const handleImageAsFile = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setImage(selected);
      setError("");
    } else {
      setImage(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <form>
      <label>
        <input type="file" onChange={handleImageAsFile} />
        <span>Upload the image of the {typeOfAnimal}</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {image && <div>{image.name}</div>}
        {image && <ProgressBar image={image} setImage={setImage} typeOfAnimal={typeOfAnimal}/>}
      </div>
      <ImageGrid setSelectedImg={setSelectedImg} typeOfAnimal={typeOfAnimal}/>
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </form>
  );
}

export default Animal;
