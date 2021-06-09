import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "./Dog.css";
import firebase from "./firebase";
import { database } from "./firebase";

function Dog() {
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
  };
  const uploadTask = database
    .ref(`/images/${imageAsFile.name}`)
    .put(imageAsFile);

  const [value, onChange] = useState(new Date());

  return (
    <form className="Dog_container" onSubmit={handleFireBaseUpload}>
      <input type="file" onChange={handleImageAsFile} />
      <label for="date">Ημερομηνία & Ώρα</label>
      <DateTimePicker onChange={onChange} value={value} />
      <label for="place">Τοποθεσία</label>
      <select name="place" id="place">
        <option value="preveza">Πρέβεζα</option>
        <option value="ioannina">Ιωάννινα</option>
        <option value="arta">Άρτα</option>
        <option value="thesprotia">Θεσπρωτία</option>
      </select>
      <button className="save">Καταχώρηση</button>
    </form>
  );
}

export default Dog;
