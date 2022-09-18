import React from "react";
import styled from "styled-components";

const Base = styled.div`
  //
`;

const Row = styled.div`
  display: flex;
`;

const Box = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid white;
`;

const LottoAccMapView: React.FC = () => {
  return (
    <Base>
      <Row>
        {new Array(7).fill(0).map((_, index) => {
          return <Box key={index}>{index + 1}</Box>;
        })}
      </Row>
      {/* <Row>
        {new Array(7).fill(0).map((_, index) => {
          return <Box key={index}>{index + 1 + 7}</Box>;
        })}
      </Row>
      <Row>
        {new Array(7).fill(0).map((_, index) => {
          return <Box key={index}>{index + 1 + 7 * 2}</Box>;
        })}
      </Row>
      <Row>
        {new Array(7).fill(0).map((_, index) => {
          return <Box key={index}>{index + 1 + 7 * 3}</Box>;
        })}
      </Row>
      <Row>
        {new Array(7).fill(0).map((_, index) => {
          return <Box key={index}>{index + 1 + 7 * 4}</Box>;
        })}
      </Row>
      <Row>
        {new Array(7).fill(0).map((_, index) => {
          return <Box key={index}>{index + 1 + 7 * 5}</Box>;
        })}
      </Row>
      <Row>
        {new Array(3).fill(0).map((_, index) => {
          return <Box key={index}>{index + 1 + 7 * 6}</Box>;
        })}
      </Row> */}
    </Base>
  );
};

export default LottoAccMapView;
