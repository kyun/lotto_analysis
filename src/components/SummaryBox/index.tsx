import React from "react";
import styled from "@emotion/styled";

const Base = styled.div`
  //
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 32px;
  border: 1px solid #cccccc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

const Label = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #0073fb;
`;
const Value = styled.p`
  margin: 0;
  font-size: 32px;
  font-weight: bold;
  color: #000;
`;

interface Props {
  label: string;
  value: React.ReactNode;
  description?: string;
}
const SummaryBox: React.FC<Props> = ({ label, value, description }) => {
  return (
    <Base>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Base>
  );
};

export default SummaryBox;
