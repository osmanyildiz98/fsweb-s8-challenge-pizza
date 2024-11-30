import React from "react";
import "../assets/css/Success.css";

function Success() {
  return (
    <main className="success-container">
      <header className="header-container">
        <img src={Logo} alt="Logo" className="logo" />
      </header>
      <h1>
        TEBRİKLER!
        <br />
        SİPARİŞİNİZ ALINDI!
      </h1>
    </main>
  );
}

export default Success;
