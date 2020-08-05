import React from "react";
import styled from "@emotion/styled";

const ResultDiv = styled.div`
  color: #fff;
`;

const Paragraph = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`;

const Price = styled.p`
  font-size: 30px;
`;

const Calculation = ({ result }) => {
  if (Object.keys(result).length === 0) return null;

  return (
    <ResultDiv>
      <Price>
        The price is: <span> {result.PRICE}</span>
      </Price>
      <Paragraph>
        Highest price of the day: <span>{result.HIGHDAY}</span>
      </Paragraph>
      <Paragraph>
        Lowest price of the day: <span>{result.LOWDAY}</span>
      </Paragraph>
      <Paragraph>
        Variation in last 24 hours: <span>{result.CHANGEPCT24HOUR}</span>
      </Paragraph>
      <Paragraph>
        Last Update: <span>{result.LASTUPDATE}</span>
      </Paragraph>
    </ResultDiv>
  );
};

export default Calculation;
