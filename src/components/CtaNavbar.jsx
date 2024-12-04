import React from "react";
import Ramen from "../../Assets/Iteration-2-aseets/icons/1.svg";
import Pizza from "../../Assets/Iteration-2-aseets/icons/2.svg";
import Hamburger from "../../Assets/Iteration-2-aseets/icons/3.svg";
import Fries from "../../Assets/Iteration-2-aseets/icons/4.svg";
import Menu from "../../Assets/Iteration-2-aseets/icons/5.svg";
import Drinks from "../../Assets/Iteration-2-aseets/icons/6.svg";
import "../assets/css/CtaNavbar.css";

function CtaNavbar() {
  return (
    <div className="cta-navbar">
      <div className="btn-container">
        <img src={Ramen} />
        <p>Ramen</p>
      </div>
      <div className="btn-container">
        <img src={Pizza} />
        <p>Pizza</p>
      </div>
      <div className="btn-container">
        <img src={Hamburger} />
        <p>Burger</p>
      </div>
      <div className="btn-container">
        <img src={Fries} />
        <p>French Fries</p>
      </div>
      <div className="btn-container">
        <img src={Menu} />
        <p>Fast Food</p>
      </div>
      <div className="btn-container">
        <img src={Drinks} />
        <p>Soft Drinks</p>
      </div>
    </div>
  );
}

export default CtaNavbar;
