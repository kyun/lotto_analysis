import React from "react";
import styled from "styled-components";

const Base = styled.div`
  //
`;

const Value = styled.span`
  font-size: 24px;
`;

const Unit = styled.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  margin-right: 4px;
  margin-left: 2px;
`;

interface Props {
  value: number;
}

const LABEL = ["원", "만", "억", "조", "경", "해"];
const KoreanCurrency: React.FC<Props> = ({ value }) => {
  const splitValue = React.useMemo(() => {
    const nums = String(value).split("").reverse().map(Number);
    const result = nums
      .reduce((acc, cur, idx) => {
        if (idx % 4 === 0) {
          acc.push([]);
        }
        acc[acc.length - 1].push(cur);
        return acc;
      }, [] as any[])
      .reverse()
      .map((arr, idx) => {
        return arr.join("");
      });
    return result;
  }, [value]);

  return (
    <Base>
      {(splitValue ?? [])?.map((str, idx) => {
        return (
          <React.Fragment key={idx}>
            <Value key={idx}>{str}</Value>
            <Unit>{LABEL[splitValue.length - idx - 1]}</Unit>
          </React.Fragment>
        );
      })}
    </Base>
  );
};
export default KoreanCurrency;
