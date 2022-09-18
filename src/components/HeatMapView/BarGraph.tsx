import React from "react";
import styled from "styled-components";

const Base = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
`;
const Label = styled.div`
  background: blue;
  width: 40px;
  margin-right: 8px;
`;
const Bar = styled.div<{ height: number }>`
  width: 20px;
  height: ${({ height }) => height}px;
  background: red;
  transition: height 0.3s ease-in-out;
`;
const Box = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 12px;
`;
const BarGraph: React.FC = ({ item }: any) => {
  return (
    <Base>
      <Row>
        <Label>123</Label>
        {item.map((v: number, index: number) => {
          return <Bar key={index} height={v} />;
        })}
      </Row>
      <Row>
        <Label>123</Label>
        {item.map((v: number, index: number) => {
          return <Box key={index}>{v}</Box>;
        })}
      </Row>
    </Base>
  );
};

export default React.memo(BarGraph);
