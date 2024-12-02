import React from "react";
import "../assets/css/Success.css";
import Header from "./Header";

function Success() {
  return (
    <>
      <Header />
      <main className="success-container">
        <h1>
          TEBRİKLER!
          <br />
          SİPARİŞİNİZ ALINDI!
        </h1>
      </main>
    </>
  );
}

export default Success;
