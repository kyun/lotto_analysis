import React from "react";
import styled from "styled-components";

const Base = styled.div<{ color: string }>`
  font-size: 48px;
  font-family: "Inter", sans-serif;
  font-style: italic;
  font-weight: bold;
  color: #fff;

  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${({ theme, color }) => theme[color]};

  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 1000px) {
    width: 72px;
    height: 72px;
    font-size: 40px;
  }
  @media (max-width: 800px) {
    width: 56px;
    height: 56px;
    font-size: 24px;
  }
  @media (max-width: 600px) {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }
  @media (max-width: 450px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

const Label = styled.span`
  margin-left: -8px;
  @media (max-width: 800px) {
    margin-left: -6px;
  }
  @media (max-width: 450px) {
    margin-left: -4px;
  }
`;

interface Props {
  number: number;
}

const COLOR_NAME = ["YELLOW", "SKYBLUE", "RED", "GRAY", "GREEN"];
const NumberBall: React.FC<Props> = ({ number }) => {
  return (
    <Base color={COLOR_NAME[~~(number / 10)]}>
      <Label>{number}</Label>
    </Base>
  );
};

export default NumberBall;
