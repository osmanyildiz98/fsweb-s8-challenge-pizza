import React from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/CtaContainer.css";

function CtaContainer() {
  const histroy = useHistory();

  const goToOrderPizza = () => {
    histroy.push("/orderPizza");
  };
  return (
    <div className="cta-container">
      <div className="cta-left">
        <h2>
          Özel <br /> Lezzetus
        </h2>
        <p>Position:Absolute Acı Burger</p>
        <button onClick={goToOrderPizza}>SİPARİŞ VER</button>
      </div>
      <div className="cta-right">
        <div className="cta-right-top">
          <h2>
            Hackathlon <br /> Burger Menü
          </h2>
          <button>SİPARİŞ VER</button>
        </div>
        <div className="cta-right-bottom">
          <h2>
            <span className="red">Çoooook</span> hızlı
            <br /> npm gibi kurye{" "}
          </h2>
          <button>SİPARİŞ VER</button>
        </div>
      </div>
    </div>
  );
}

export default CtaContainer;
