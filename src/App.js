import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import imagen from "./images/cryptomonedas.png";
import Formulario from "./components/Formulario";
import Calculation from "./components/Calculation";
import Spinner from "./components/Spinner/Spinner";
import axios from "axios";
import { GlobalStyle } from "./GlobalStyle";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 100px;

  &:after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [currency, saveCurrency] = useState("");
  const [cryptoCurrency, saveCryptoCurrency] = useState("");
  const [result, saveResult] = useState({});
  const [loading, saveLoad] = useState(false);

  useEffect(() => {
    const calculateCrypto = async () => {
      if (currency === "") return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;
      const result = await axios.get(url);

      saveLoad(true);

      setTimeout(() => {
        saveLoad(false);
        saveResult(result.data.DISPLAY[cryptoCurrency][currency]);
      }, 3000);
    };

    calculateCrypto();
  }, [currency, cryptoCurrency]);

  //Show spinner or result
  const Component = loading ? <Spinner /> : <Calculation result={result} />;

  return (
    <Contenedor>
      <div>
        <Image src={imagen} alt="imagen-cripto" />
      </div>
      <div>
        <Heading>Criptomoney</Heading>
        <Formulario
          saveCurrency={saveCurrency}
          saveCryptoCurrency={saveCryptoCurrency}
        />
        {Component}
      </div>
      <style jsx="true" global="true">
        {GlobalStyle}
      </style>
    </Contenedor>
  );
}

export default App;
