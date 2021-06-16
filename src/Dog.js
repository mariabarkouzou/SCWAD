import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "./Dog.css";
import { database } from "./firebase";
import ImageUploader from "react-images-upload";

function Dog() {
  const [imageAsFile, setImageAsFile] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
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
      <label for="date">Date & Time</label>
      <DateTimePicker value={date} onChange={(e) => setDate(e.target.value)} />
      <label for="place">City</label>
      <select
        name="place"
        id="place"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      >
        <option value="agios-nikolaos">Agios Nikolaos</option>
        <option value="agrinio">Agrinio</option>
        <option value="alexandria">Alexandria</option>
        <option value="alexandroupoli">Alexandroupoli</option>
        <option value="amaliada">Amaliada</option>
        <option value="argos">Argos</option>
        <option value="arta">Arta</option>
        <option value="athens">Athens</option>
        <option value="ayio">Ayio</option>
        <option value="chalkida">Chalkida</option>
        <option value="chania">Chania</option>
        <option value="chios">Chios</option>
        <option value="drama">Drama</option>
        <option value="edessa">Edessa</option>
        <option value="elevsina">Elevsina</option>
        <option value="ermoupoli">Ermoupoli</option>
        <option value="florina">Florina</option>
        <option value="gerakas">Gerakas</option>
        <option value="giannitsa">Giannitsa</option>
        <option value="glika-nera">Glika Nera</option>
        <option value="grevena">Grevena</option>
        <option value="ialyssos">Ialyssos</option>
        <option value="ierapetra">Ierapetra</option>
        <option value="ioannina">Ioannina</option>
        <option value="irakleio">Irakleio</option>
        <option value="katerini">Katerini</option>
        <option value="kalamata">Kalamata</option>
        <option value="kalimnos">Kalimnos</option>
        <option value="karditsa">Karditsa</option>
        <option value="kastoria">Kastoria</option>
        <option value="kavala">Kavala</option>
        <option value="kerkira">Kerkira</option>
        <option value="kilkis">Kilkis</option>
        <option value="komotini">Komotini</option>
        <option value="korinthos">Korinthos</option>
        <option value="koropi">Koropi</option>
        <option value="kos">Kos</option>
        <option value="kozani">Kozani</option>
        <option value="lamia">Lamia</option>
        <option value="larisa">Larisa</option>
        <option value="levadia">Levadia</option>
        <option value="loutraki">Loutraki</option>
        <option value="loutsa">Loutsa</option>
        <option value="mandra">Mandra</option>
        <option value="megara">Megara</option>
        <option value="mesologgi">Mesologgi</option>
        <option value="mitilini">Mitilini</option>
        <option value="navpaktos">Navpaktos</option>
        <option value="navplio">Navplio</option>
        <option value="naoussa">Naoussa</option>
        <option value="nea-makri">Nea Makri</option>
        <option value="oreokastro">Oreokastro</option>
        <option value="orestiada">Orestiada</option>
        <option value="patra">Patra</option>
        <option value="paiania">Paiania</option>
        <option value="pallini">Pallini</option>
        <option value="piraeus">Piraeus</option>
        <option value="pirgos">Pirgos</option>
        <option value="preveza">Preveza</option>
        <option value="ptolemaida">Ptolemaida</option>
        <option value="rafina">Rafina</option>
        <option value="rethimno">Rethimno</option>
        <option value="rodos">Rodos</option>
        <option value="salamina">Salamina</option>
        <option value="serres">Serres</option>
        <option value="sparti">Sparti</option>
        <option value="thermi">Thermi</option>
        <option value="thessaloniki">Thessaloniki</option>
        <option value="theva">Theva</option>
        <option value="tirnavos">Tirnavos</option>
        <option value="tripoli">Tripoli</option>
        <option value="trikala">Trikala</option>
        <option value="vari">Vari</option>
        <option value="veroia">Veroia</option>
        <option value="volos">Volos</option>
        <option value="xanthi">Xanthi</option>
      </select>
      <button className="submit">Submit</button>
    </form>
  );
}

export default Dog;
