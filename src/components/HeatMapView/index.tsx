import React from "react";
import styled from "@emotion/styled";
import BarGraph from "./BarGraph";

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

const MockArray = new Array(45).fill(0);

const MockObj = MockArray.reduce((acc, cur, index) => {
  acc[index + 1] = 0;
  return acc;
}, {});

interface Props {
  item: any[];
}
const HeatMapView: React.FC<Props> = ({ item }) => {
  const [includeBonus, setIncludeBonus] = React.useState(false);

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

  const numberAcc = React.useMemo(() => {
    const obj = item.reduce(
      (acc, cur) => {
        const numbers = [
          cur.drwtNo1,
          cur.drwtNo2,
          cur.drwtNo3,
          cur.drwtNo4,
          cur.drwtNo5,
          cur.drwtNo6,
        ];
        if (includeBonus) {
          numbers.push(cur.bnusNo);
        }
        numbers.forEach((number) => {
          if (!acc[number]) {
            acc[number] = 0;
          }
          acc[number] = acc[number] + 1;
        });
        return acc;
      },
      { ...MockObj }
    );
    console.log(obj);

    return Object.keys(obj).map((key) => {
      return obj[key];
    });
  }, [item, includeBonus]);
  return (
    <Base>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeBonus}
            onChange={() => setIncludeBonus((prev) => !prev)}
          />
          <span>Include Bonus Number</span>
        </label>
      </div>
      <BarGraph item={numberAcc} />
      {item.map((item: any, index: number) => {
        return (
          <Row key={item.drwNo}>
            <RowLabel>{item.drwNo}</RowLabel>
            {MockArray.map((_, index) => (
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
