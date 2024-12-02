import React from "react";
import Logo from "../../Assets/Iteration-1-assets/logo.svg";
import "../assets/css/Header.css";

function Header() {
  return (
    <>
      <img src={Logo} alt="Logo" className="logo" />
    </>
  );
}

export default Header;
