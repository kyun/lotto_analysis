import React from "react";
import styled from "styled-components";

const Base = styled.div`
  // background: red;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Row = styled.div`
  // border: 1px solid blue;
  display: flex;
  gap: 2px;
`;

const RowLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin-right: 8px;
  min-width: 40px;
`;
const NumberBox = styled.span<{ active?: boolean; bonus?: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 11px;
  color: ${({ active }) => (active ? "white" : "gray")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ active }) =>
    active ? "rgba(255, 0, 0, 0.3)" : "transparent"};

  ${({ bonus }) =>
    bonus &&
    ` 
    background: rgba(0, 0, 255, 0.3);
    color: white;
  `};
`;

const HeatMapView: React.FC = ({ item }: any) => {
  const mockArray = React.useMemo(() => {
    return new Array(45).fill(0);
  }, []);

  const isActive = React.useCallback((item: any, number: number) => {
    if (item.drwtNo1 === number) return true;
    if (item.drwtNo2 === number) return true;
    if (item.drwtNo3 === number) return true;
    if (item.drwtNo4 === number) return true;
    if (item.drwtNo5 === number) return true;
    if (item.drwtNo6 === number) return true;
    return false;
  }, []);
  const isBonus = React.useCallback((item: any, number: number) => {
    if (item.bnusNo === number) return true;
    return false;
  }, []);
  return (
    <Base>
      {item.map((item: any, index: number) => {
        return (
          <Row key={index}>
            <RowLabel>{item.drwNo}</RowLabel>
            {mockArray.map((_, index) => (
              <NumberBox
                key={index}
                bonus={isBonus(item, index + 1)}
                active={isActive(item, index + 1)}
              >
                {index + 1}
              </NumberBox>
            ))}
          </Row>
        );
      })}
      {/* <Row>
        <RowLabel>1033회</RowLabel>
        {mockArray.map((_, index) => (
          <NumberBox key={index}>{index + 1}</NumberBox>
        ))}
      </Row>
      <Row>
        <RowLabel>1033회</RowLabel>
        {mockArray.map((_, index) => (
          <NumberBox key={index}>{index + 1}</NumberBox>
        ))}
      </Row> */}
    </Base>
  );
};

export default HeatMapView;
