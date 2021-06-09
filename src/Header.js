import React from 'react'
import logo from "./images/icon.png"
import "./Header.css"
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
             <Link to="/">
        <img
          className="header_logo"
          src={logo}
          alt="scwad logo"
        /> </Link>
        </div>
    )
}

export default Header
