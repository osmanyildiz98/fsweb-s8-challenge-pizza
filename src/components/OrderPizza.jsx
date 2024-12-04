import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/css/OrderPizza.css";

const pizzaSize = ["Küçük", "Orta", "Büyük"];
const pizzaEdge = ["İnce", "Normal", "Kalın"];
const selections = [
  "Pepperoni",
  "Tavuk Izgara",
  "Mısır",
  "Sarımsak",
  "Ananas",
  "Sosis",
  "Soğan",
  "Sucuk",
  "Biber",
  "Kabak",
  "Kanada Jambonu",
  "Domates",
  "Jalepeno",
];
const errorMessage = {
  usarname: "En az 3 karakter içermeli!",
  size: "*",
  thick: "*",
  pizzaItems: "En az 3 en fazla 10 seçim yapmalısınız!",
};

function OrderPizza() {
  const [isValid, setIsValid] = useState(false);
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    size: "",
    thick: "",
    pizzaItems: [],
    note: "",
  });
  const [error, setError] = useState({
    username: true,
    size: true,
    thick: true,
    pizzaItems: true,
  });

  useEffect(() => {
    if (!error.username && !error.size && !error.thick && !error.pizzaItems) {
      setIsValid(true);
    }
  }, [error]);

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    let newFormData = { ...formData };
    if (type === "checkbox") {
      const updatedPizzaItems = formData.pizzaItems.includes(value)
        ? formData.pizzaItems.filter((item) => item !== value)
        : [...formData.pizzaItems, value];
      newFormData.pizzaItems = updatedPizzaItems;
    } else {
      newFormData[name] = value;
    }

    setError((prevError) => ({
      ...prevError,
      username: newFormData.username.trim().length >= 4 ? false : true,
      size: newFormData.size === "" ? true : false,
      thick: newFormData.thick === "" ? true : false,
      pizzaItems:
        newFormData.pizzaItems.length >= 4 &&
        newFormData.pizzaItems.length <= 10
          ? false
          : true,
    }));
    console.log(newFormData);
    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;

    axios
      .post("https://reqres.in/api/pizza", formData)
      .then((response) => console.log(response.data))
      .catch((error) => console.warn(error));
  };

  return (
    <>
      <header className="order-pizza-header">
        <Header />
        <nav className="order-pizza-header-nav">
          <NavLink to="/" className="home-link">
            Anasayfa
          </NavLink>
          <span> - </span>
          <a href="#" className="order-link">
            Sipariş Oluştur
          </a>
        </nav>
      </header>
      <div className="form-container">
        <main className="order-pizza-main">
          <section className="pizza-container">
            <h2 className="pizza-header">Position Absolute Acı Pizza</h2>
            <div className="pizza-info">
              <p>85.50₺</p>
              <div>
                <p>4.9</p>
                <p>(200)</p>
              </div>
            </div>
            <p className="pizza-text">
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </section>

          <form onSubmit={handleSubmit}>
            <div className="radio-select">
              <fieldset className="pizzaSize-radio">
                <legend>Boyut Seç</legend>
                {pizzaSize.map((item, index) => {
                  return (
                    <div key={index}>
                      <input
                        type="radio"
                        id={item}
                        name="size"
                        value={item}
                        onChange={handleChange}
                      />
                      <label htmlFor={item}>{item}</label>
                    </div>
                  );
                })}
              </fieldset>
              <fieldset className="pizzaEdge-select">
                <legend>Hamur Seç</legend>
                <select name="thick" id="thick" onChange={handleChange}>
                  <option value="">Hamur Kalınlığı</option>
                  {pizzaEdge.map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </fieldset>
            </div>
            <fieldset className="selections-checkbox">
              <legend>Ek Malzemeler</legend>
              <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
              <div className="checkbox-container">
                {selections.map((item, index) => {
                  return (
                    <div key={index}>
                      <input
                        type="checkbox"
                        name="pizzaItems"
                        id={item}
                        value={item}
                        onChange={handleChange}
                      />
                      <label htmlFor={item}>{item}</label>
                    </div>
                  );
                })}
              </div>
            </fieldset>
            <fieldset className="username-input">
              <legend>Ad Soyad</legend>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Adınızı ve Soyadınızı yazınız"
                onChange={handleChange}
              />
            </fieldset>
            <fieldset className="order-note">
              <legend>Sipariş Notu</legend>
              <input
                type="text"
                name="orderNote"
                id="orderNote"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                onChange={handleChange}
              />
            </fieldset>
            <hr className="hr" />
            <fieldset className="form-buttons">
              <div className="pizza-count">
                <button
                  type="button"
                  onClick={() => setCount(count - 1)}
                  disabled={count <= 0}
                >
                  -
                </button>
                <p>{count}</p>
                <button type="button" onClick={() => setCount(count + 1)}>
                  +
                </button>
              </div>
              <div className="order-summary">
                <h3>Sipariş Toplamı</h3>
                <p>
                  Seçimler<span>25.00₺</span>
                </p>

                <p>
                  Toplam<span>110.50₺</span>
                </p>

                <button disabled={!isValid} className="submit-btn">
                  Sipariş Ver
                </button>
              </div>
            </fieldset>
          </form>
        </main>
      </div>
      <footer className="order-pizza-footer">
        <Footer />
      </footer>
    </>
  );
}

export default OrderPizza;
