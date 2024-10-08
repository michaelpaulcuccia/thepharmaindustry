"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Bebas_Neue } from "next/font/google";
import { mobileBreakpoint } from "../constants";
import Image from "next/image";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #444444;
  padding: 12px 0;
  margin-bottom: 32px;

  @media (max-width: ${mobileBreakpoint}) {
    padding: 12px 8px;
  }

  h2 {
    letter-spacing: 3.5px;
    font-size: 48px;
    line-height: 48px;

    @media (max-width: ${mobileBreakpoint}) {
      font-size: 28px;
      line-height: 28px;
      text-align: center;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
  }

  img {
    margin: 0 3px;
    @media (max-width: ${mobileBreakpoint}) {
      margin: 0 0 4px 0;
    }
  }
`;

export default function NavBar() {
  return (
    <Link href="/">
      <Root>
        <ImageContainer>
          <Image src="/images/needle.svg" height={25} width={25} alt="" />
          <Image src="/images/mortarpestle.svg" height={25} width={25} alt="" />
        </ImageContainer>
        <h2 className={bebas.className}>the pharmaceutical industry</h2>
        <ImageContainer>
          <Image src="/images/microscope.svg" height={25} width={25} alt="" />
          <Image src="/images/pill.svg" height={25} width={25} alt="" />
        </ImageContainer>
      </Root>
    </Link>
  );
}
