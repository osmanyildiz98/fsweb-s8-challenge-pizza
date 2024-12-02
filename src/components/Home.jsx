import React from "react";
import "../assets/css/Home.css";
import Header from "./Header";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const goOrderPizza = () => {
    history.push("/orderPizza");
  };

  return (
    <>
      <header className="home-header">
        <Header />
      </header>
      <main className="home-main-container">
        <h1 className="home-main-header">
          KOD ACIKTIRIR <br /> PİZZA, DOYURUR
        </h1>
        <button onClick={goOrderPizza} className="home-main-btn">
          ACIKTIM
        </button>
      </main>
    </>
  );
}

export default Home;
