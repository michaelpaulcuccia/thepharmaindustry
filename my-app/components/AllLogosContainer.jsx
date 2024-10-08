import React from "react";
import styled from "styled-components";
import { mobileBreakpoint } from "../constants";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 35px;
  flex-wrap: wrap;
  margin: 18px 100px 32px 100px;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    grid-gap: 0px;
  }
`;

export default function AllLogosContainer({ children }) {
  return <Root>{children}</Root>;
}
