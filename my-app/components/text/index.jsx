"use client";
import React from "react";
import styled from "styled-components";
import { mobileBreakpoint } from "../../constants";

const StyledHeadlineText = styled.h2`
  font-size: 28px;
  line-height: 28px;
  margin-bottom: 16px;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 22px;
    line-height: 22px;
    text-align: center;
  }
`;

export function HeadlineText({ children }) {
  return <StyledHeadlineText>{children}</StyledHeadlineText>;
}
