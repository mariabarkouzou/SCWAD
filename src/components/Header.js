import React, { useState } from "react";
import logo from "../images/icon.png";
import { Link } from "react-router-dom";
import Instructions from "./Instructions";

function Header() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} alt="scwad logo" />{" "}
      </Link>
      <button
        id="menu_header"
        onClick={() => {
          setIsShown(true);
        }}
      >
        Instructions
      </button>
      <Instructions trigger={isShown} setTrigger={setIsShown} />
    </div>
  );
}

export default Header;
