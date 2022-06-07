import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Ed from "./ed";
import "./teste01.css";
import Exercicio01 from "./exercicio01";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Ed />

    <p id="edvard" class="teste">
      {" "}
      ASDF{" "}
    </p>
    <p class="ativo">dawww</p>
    <p class="inativo">weqweqerq</p>
    <p class="ativo">cxvbsdfw</p>
    <p class="inativo">fadfqw</p>
    <button
      id="qualquer"
      onClick={function () {
        document.getElementById("edvard").innerHTML = "blablabla";
      }}
    >
      {" "}
      Botãozin{" "}
    </button>
    <icone />
    <Exercicio01 />
    <App />
  </React.StrictMode>,
);
