"use client";
import React from "react";
import styled from "styled-components";
import { Bebas_Neue } from "next/font/google";
import { mobileBreakpoint } from "../constants";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const Root = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  background: black;
  padding: 12px 0;
  margin-bottom: 32px;

  h2 {
    letter-spacing: 3.5px;
    font-size: 48px;
    line-height: 48px;

    @media (max-width: ${mobileBreakpoint}) {
      font-size: 32px;
      line-height: 32px;
      text-align: center;
    }
  }
`;

export default function NavBar() {
  return (
    <Root>
      <h2 className={bebas.className}>the pharmaceutical industry</h2>
    </Root>
  );
}
