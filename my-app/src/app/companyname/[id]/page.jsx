"use client";
import React, { useContext } from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import PharmaContext from "../../../../context/PharmaContext";
import Image from "next/image";
import { HeadlineText } from "../../../../components/text";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function page() {
  const pathname = usePathname();
  const trimmedPathName = pathname.split("/companyname/")[1];
  const { PHARMA } = useContext(PharmaContext);
  const company = PHARMA.filter(
    (item) => item.logoAndRouteName === trimmedPathName
  );

  return (
    <div>
      <ImageContainer>
        <Image
          src={`/logos/${company[0].logoAndRouteName}.svg`}
          height={150}
          width={150}
          alt=""
        />
      </ImageContainer>
      <HeadlineText>
        {company[0].name} was founded in {company[0].founded} and is
        headquartered in {company[0].headquarters}. As of 2024,{" "}
        {company[0].name} has {company[0].numberOfEmployees} employees.
      </HeadlineText>
      <HeadlineText>
        {company[0].name} {company[0].briefDescription}
      </HeadlineText>
    </div>
  );
}
