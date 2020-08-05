import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import useMoney from "../hooks/useMoney";
import useCryptomoney from "../hooks/useCryptomoney";
import axios from "axios";
import { Fonts } from "./../fonts/utils/constant";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  font-family: ${Fonts.normalJosefin};
  text-transform: uppercase;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = ({ saveCurrency, saveCryptoCurrency }) => {
  const [cryptoList, saveCryptomoney] = useState([]);
  const [error, saveError] = useState(false);

  const Currency = [
    { code: "USD", name: "American Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "Pound Sterling" },
  ];

  // Use useMoney
  const [state, Select] = useMoney("Choose a currency", "", Currency);

  // Use Criptomoney
  const [cryptomoney, SelectCrypto] = useCryptomoney(
    "Choose a cryptocurrency",
    "",
    cryptoList
  );

  // API call
  useEffect(() => {
    const callAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const result = await axios.get(url);
      saveCryptomoney(result.data.Data);
    };
    callAPI();
  }, []);

  const calculate = (e) => {
    e.preventDefault();

    //both fields selected validation
    if (state === "" || cryptomoney === "") {
      saveError(true);
      return;
    }
    saveError(false);
    saveCurrency(state);
    saveCryptoCurrency(cryptomoney);
  };

  return (
    <form onSubmit={calculate}>
      {error ? <Error message="All fields are required." /> : null}
      <Select />
      <SelectCrypto />
      <Button type="submit" value="Calculate" />
    </form>
  );
};

export default Formulario;
