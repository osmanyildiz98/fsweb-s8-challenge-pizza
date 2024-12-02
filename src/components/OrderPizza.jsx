import React, { useState } from "react";
import Header from "./Header";
import "../assets/css/OrderPizza.css";
import { NavLink } from "react-router-dom";

const pizzaSize = ["Küçük", "Orta", "Büyük"];
const pizzaEdge = ["Hamur Kalınlığı", "İnce", "Normal", "Kalın"];
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

function OrderPizza() {
  const [count, setCount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    size: "",
    thick: "",
    selections: selectedItems,
    note: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    let newSelectedItems = [];
    let newFormData = {};
    if (type === "checkbox") {
      if (selectedItems.includes(value)) {
        newSelectedItems = selectedItems.filter((item) => item !== value);
      } else {
        newSelectedItems = [...selectedItems, value];
      }
    } else {
      newFormData = { ...formData, [name]: value };
    }

    setSelectedItems(newSelectedItems);
    setFormData(newFormData);
    console.log(newSelectedItems);
    console.log(newFormData);
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

          <form>
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
                        name="selections"
                        id={item}
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

                <button className="submit-btn">Sipariş Ver</button>
              </div>
            </fieldset>
          </form>
        </main>
      </div>
    </>
  );
}

export default OrderPizza;
