import React from "react";
import styled from "@emotion/styled";
import NumberBall from "./NumberBall";

const Base = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 32px;
  background: #f8f8f8;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
  @media (max-width: 800px) {
    padding: 24px;
    gap: 8px;
  }
  @media (max-width: 600px) {
    pading: 16px;
    gap: 4px;
  }
  @media (max-width: 450px) {
    padding: 12px;
  }
`;
const PlusText = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 72px;
  color: #444;
  @media (max-width: 800px) {
    font-size: 48px;
  }
  @media (max-width: 600px) {
    font-size: 40px;
  }
  @media (max-width: 450px) {
    font-size: 32px;
  }
`;
const WinNumberBox: React.FC = () => {
  return (
    <Base>
      <NumberBall number={1} />
      <NumberBall number={11} />
      <NumberBall number={21} />
      <NumberBall number={31} />
      <NumberBall number={41} />
      <NumberBall number={45} />
      <PlusText>+</PlusText>
      <NumberBall number={9} />
    </Base>
  );
};
export default WinNumberBox;
