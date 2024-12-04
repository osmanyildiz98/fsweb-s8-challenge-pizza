import React from "react";
import Ramen from "../../Assets/Iteration-2-aseets/icons/1.svg";
import Pizza from "../../Assets/Iteration-2-aseets/icons/2.svg";
import Hamburger from "../../Assets/Iteration-2-aseets/icons/3.svg";
import Fries from "../../Assets/Iteration-2-aseets/icons/4.svg";
import Menu from "../../Assets/Iteration-2-aseets/icons/5.svg";
import Drink from "../../Assets/Iteration-2-aseets/icons/6.svg";
import "../assets/css/HeroNav.css";

function HeroNav() {
  return (
    <div className="heronav">
      <div>
        <img src={Ramen} alt="" />
        <p>YENİ! Kore</p>
      </div>
      <div>
        <img src={Pizza} alt="" />
        <p>Pizza</p>
      </div>
      <div>
        <img src={Hamburger} alt="" />
        <p>Burger</p>
      </div>
      <div>
        <img src={Fries} alt="" />
        <p>Kızartmalar</p>
      </div>
      <div>
        <img src={Menu} alt="Hamburger menu image" />
        <p>Fast food</p>
      </div>
      <div>
        <img src={Drink} alt="Drink image" />
        <p>Gazlı İçecek</p>
      </div>
    </div>
  );
}

export default HeroNav;
