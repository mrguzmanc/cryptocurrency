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

const useMoney = (label, initialState, Currency) => {
  const [state, updateState] = useState(initialState);

  const Select = () => (
    <Fragment>
      <Label>{label}</Label>
      <Selection onChange={(e) => updateState(e.target.value)} value={state}>
        <option value="">--Select a currency--</option>
        {Currency.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </Selection>
    </Fragment>
  );

  return [state, Select, updateState];
};

export default useMoney;
