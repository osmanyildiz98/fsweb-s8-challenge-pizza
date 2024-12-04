import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HeroNav from "./HeroNav";
import CtaContainer from "./CtaContainer";
import CtaHeader from "./CtaHeader";
import CtaNavbar from "./CtaNavbar";
import CtaMenu from "./CtaMenu";
import "../assets/css/Home.css";

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
      <hero className="home-hero-container">
        <h1 className="home-hero-header">
          KOD ACIKTIRIR <br /> PİZZA, DOYURUR
        </h1>
        <button onClick={goOrderPizza} className="home-hero-btn">
          ACIKTIM
        </button>
      </hero>
      <HeroNav />
      <main className="home-main">
        <CtaContainer />
        <CtaHeader />
        <CtaNavbar />
        <CtaMenu />
      </main>
      <footer className="home-footer">
        <Footer />
      </footer>
    </>
  );
}

export default Home;
