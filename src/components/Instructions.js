import React from "react";
import x from "../images/close-icon.png";

function Instructions(props) {
  return props.trigger ? (
    <div className="instructions_container">
      <div className="instructions_texts">
        <h1> Instructions For Alan AI</h1>
        <div className="instruction_text">
          <p>
            -When you open this application you will see a microphone button on
            the bottom right corner.
          </p>
          <p>
            -You can connect your microphone with this application and energize
            Alan by saying with a clear voice: "Hello Alan!"
          </p>

          <p>
            {" "}
            -You can also ask him these questions to help you collect
            information about the app:{" "}
          </p>
          <ul>
            <li>"How are you?" </li>
            <li>"What does SCWAD stands for Alan?" </li>
            <li> "What does this application do?" or "What can I do here?"</li>
            <li> "Can you repeat the steps please?" </li>

            <li>"Why do I need to upload the image of the animal Alan?"</li>

            <li>"Thank you very much" </li>
          </ul>
          <h6>
            PS. Although the database connected to ALAN has the 77 biggest
            cities of Greece , for now ALAN can only hear some cities due to
            pronunciation , so try some of these :<div></div>
            <span className="cities">
              Athens , Thessaloniki , Preveza , Kalamata , Patra , Volos ,
              Trikala , Alexandroupoli , Komotini , Katerini , Kavala , Salamina
              , Tripoli.{" "}
            </span>
          </h6>
        </div>
        <img
          className="instructions_button"
          onClick={() => props.setTrigger(false)}
          src={x}
        />
      </div>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default Instructions;
