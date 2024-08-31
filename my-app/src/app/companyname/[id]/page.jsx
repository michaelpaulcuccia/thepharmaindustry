"use client";
import React, { useContext } from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/material";
import PharmaContext from "../../../../context/PharmaContext";
import Image from "next/image";
import Link from "next/link";
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
  const { drugs } = company[0];

  return (
    <div>
      <ImageContainer>
        <Image
          src={`/logos/${company[0].logoAndRouteName}.svg`}
          height={150}
          width={150}
          alt={company[0].name}
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
      <HeadlineText>
        These are the five most popular and profitable drugs {company[0].name}{" "}
        produces:
      </HeadlineText>
      <div style={{ marginBottom: "36px" }}></div>
      {drugs.map((item, i) => (
        <Container key={i} maxWidth="md">
          <Accordion
            sx={{
              backgroundColor: "#f5f5f5",
              border: "1px solid #e0e0e0",
              boxShadow: "none",
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3>{item.drugName}</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                <strong>Usage:</strong> {item.usage}
              </p>
              <br />
              <div>
                <strong>Website:</strong>{" "}
                <Link
                  href={item.website}
                  target="_blank"
                  style={{ textDecoration: "underline", color: "blue" }}
                >
                  {" "}
                  {item.drugName}
                </Link>
              </div>
              <br />
              <Link
                href={`/learnabouttrials/${item.drugName}`}
                style={{ textDecoration: "underline", color: "blue" }}
              >
                {" "}
                Learn about clinical trials.
              </Link>
            </AccordionDetails>
          </Accordion>
        </Container>
      ))}
    </div>
  );
}
