import React from "react";
import PizzaOne from "../../Assets/Iteration-2-aseets/pictures/food-1.png";
import PizzaTwo from "../../Assets/Iteration-2-aseets/pictures/food-2.png";
import Hamburger from "../../Assets/Iteration-2-aseets/pictures/food-3.png";
import "../assets/css/CtaMenu.css";

function CtaMenu() {
  return (
    <div className="ctamenu-container">
      <div className="card">
        <img src={PizzaOne} />
        <h3>Terminal Pizza</h3>
        <div>
          <p>4.9</p>
          <p>(200)</p>
          <p>85₺</p>
        </div>
      </div>
      <div className="card">
        <img src={PizzaTwo} />
        <h3>Position Absolute Acı Pizza</h3>
        <div>
          <p>4.9</p>
          <p>(200)</p>
          <p>85₺</p>
        </div>
      </div>
      <div className="card">
        <img src={Hamburger} />
        <h3>useEffect Tavuklu Burger</h3>
        <div>
          <p>4.9</p>
          <p>(200)</p>
          <p>85₺</p>
        </div>
      </div>
    </div>
  );
}

export default CtaMenu;
