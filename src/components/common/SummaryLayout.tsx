import React from "react";
import styled from "styled-components";

const Base = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100vh;
  margin: auto;
  // padding: 0 16px;
`;
interface Props {
  [key: string]: any;
  children: React.ReactNode;
}

const SummaryLayout: React.FC<Props> = ({ children }) => {
  return <Base>{children}</Base>;
};
export default SummaryLayout;
