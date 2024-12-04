import React from "react";
import { FaTwitter } from "react-icons/fa";
import Logo from "../../Assets/Iteration-2-aseets/footer/logo-footer.svg";
import iconOne from "../../Assets/Iteration-2-aseets/footer/icons/icon-1.png";
import iconTwo from "../../Assets/Iteration-2-aseets/footer/icons/icon-2.png";
import iconThree from "../../Assets/Iteration-2-aseets/footer/icons/icon-3.png";
import instaOne from "../../Assets/Iteration-2-aseets/footer/insta/li-0.png";
import instaTwo from "../../Assets/Iteration-2-aseets/footer/insta/li-1.png";
import instaThree from "../../Assets/Iteration-2-aseets/footer/insta/li-2.png";
import instaFour from "../../Assets/Iteration-2-aseets/footer/insta/li-3.png";
import instaFive from "../../Assets/Iteration-2-aseets/footer/insta/li-4.png";
import instaSix from "../../Assets/Iteration-2-aseets/footer/insta/li-5.png";
import "../assets/css/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-top">
        <adress>
          <img src={Logo} className="footer-logo" />
          <div>
            <img src={iconOne} id="iconOne" />
            <p>
              341 Londonderry Road,
              <br /> Istanbul Türkiye
            </p>
          </div>
          <div>
            <img src={iconTwo} />
            <p>aciktim@teknolojikyemekler.com</p>
          </div>
          <div>
            <img src={iconThree} />
            <p>+90 216 123 45 67</p>
          </div>
        </adress>
        <menu>
          <h3>Hot Menu</h3>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </menu>
        <div className="insta-container">
          <h3>Instagram</h3>
          <div className="insta-img-container">
            <div>
              <img src={instaOne} />
              <img src={instaTwo} />
              <img src={instaThree} />
            </div>
            <div>
              <img src={instaFour} />
              <img src={instaFive} />
              <img src={instaSix} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler.</p>
        <FaTwitter className="twitter-icon" />
      </div>
    </>
  );
}

export default Footer;
