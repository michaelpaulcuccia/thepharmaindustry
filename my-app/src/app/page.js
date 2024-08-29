"use client";
import React, { useContext } from "react";
import Image from "next/image";
import PharmaContext from "../../context/PharmaContext";
import { HeadlineText } from "../../components/text";
import AllLogosContainer from "../../components/AllLogosContainer";

export default function page() {
  const { PHARMA } = useContext(PharmaContext);

  return (
    <div>
      <AllLogosContainer>
        {PHARMA.map((item, i) => (
          <div key={i}>
            <Image
              src={`/logos/${item.name}.svg`}
              height={175}
              width={175}
              layout="intrinsic"
            />
          </div>
        ))}
      </AllLogosContainer>

      <HeadlineText>
        These companies are among the most profitable in the pharmaceutical
        industry, often ranking in the top tiers for revenue, market
        capitalization, and profitability. This financial strength allows them
        to continually invest in innovation and expansion.
      </HeadlineText>
      <HeadlineText>
        All of these companies operate on a global scale, with research,
        manufacturing, and sales operations spanning multiple continents. Their
        products reach patients worldwide, and they are often leaders in major
        markets like the United States, Europe, and Asia.
      </HeadlineText>
      <HeadlineText>
        A significant commonality among them is their substantial investment in
        R&D to discover, develop, and bring to market innovative drugs and
        therapies. They are leaders in developing treatments for a wide range of
        diseases, including oncology, immunology, cardiology, neurology, and
        more.
      </HeadlineText>
      <HeadlineText>
        Each company boasts a diverse portfolio of drugs, including prescription
        medications, biologics, vaccines, and, in some cases, over-the-counter
        products. They develop treatments across multiple therapeutic areas,
        allowing them to address a wide spectrum of medical needs.
      </HeadlineText>
      <HeadlineText>
        Many of these companies are at the forefront of biotechnology and the
        development of specialty medicines, including biologics, targeted
        therapies, and personalized medicine. They are actively involved in
        developing cutting-edge treatments, such as monoclonal antibodies, gene
        therapies, and immunotherapies.
      </HeadlineText>
      <HeadlineText>
        They all operate within stringent regulatory environments and have
        expertise in navigating complex approval processes by agencies like the
        U.S. Food and Drug Administration (FDA) and the European Medicines
        Agency (EMA). They ensure that their products meet the highest safety,
        efficacy, and quality standards.
      </HeadlineText>
    </div>
  );
}
