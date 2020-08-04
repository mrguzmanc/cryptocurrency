import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import { Fonts } from "./../fonts/utils/constant";

const Label = styled.div`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.7rem;
  margin-top: 2rem;
  display: block;
`;

const Selection = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: 10px;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
  font-family: ${Fonts.normalJosefin};
`;

const useCryptomoney = (label, initialState, Currency) => {
  const [state, updateState] = useState(initialState);

  const SelectCripto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Selection onChange={(e) => updateState(e.target.value)} value={state}>
        <option value="">--Select a cryptocurrency--</option>
        {Currency.map((option) => (
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
            {option.CoinInfo.FullName}
          </option>
        ))}
      </Selection>
    </Fragment>
  );

  return [state, SelectCripto, updateState];
};

export default useCryptomoney;
