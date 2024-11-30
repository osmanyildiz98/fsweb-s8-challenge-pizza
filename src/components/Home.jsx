import React from "react";
import Logo from "../../Assets/Iteration-1-assets/logo.svg";
import "../assets/css/Home.css";

function Home() {
  return (
    <main className="home-container">
      <img src={Logo} alt="Logo" className="logo" />
      <h1 className="home-page-header">
        KOD ACIKTIRIR <br /> PİZZA, DOYURUR
      </h1>
    </main>
  );
}

export default Home;
