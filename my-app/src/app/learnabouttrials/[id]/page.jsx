"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { fetchByDrugName, getIndication } from "../../../../utils";
import { HeadlineText } from "../../../../components/text";
import StudyTable from "../../../../components/StudyTable";

export default function page() {
  const [trialData, setTrialData] = useState([]);
  const [indicationData, setIndicationData] = useState("");
  const pathname = usePathname();
  const trimmedPathName = pathname.split("/learnabouttrials/")[1];
  const getData = async () => {
    const data = await fetchByDrugName(trimmedPathName);
    const { studies } = data;
    setTrialData(studies);
    const indication = await getIndication(trimmedPathName);
    const { results } = indication;
    const [firstItem] = results;
    const { indications_and_usage } = firstItem;
    setIndicationData(indications_and_usage[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <HeadlineText>
        Companies can extend their market protection and delay generic
        competition through several strategies. One of those strategies is
        adding New Indications.
      </HeadlineText>
      <HeadlineText>
        <strong>NEW INDICATIONS:</strong> If the company conducts new clinical
        trials and gets FDA approval for additional uses (indications) of the
        drug, it may gain additional exclusivity. This does not extend the
        original patent but can delay generics for those new uses.
      </HeadlineText>
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
          <h3>Current Indication Information for {trimmedPathName}.</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>{indicationData}</p>
        </AccordionDetails>
      </Accordion>
      <br />

      <HeadlineText>
        There are currently {trialData.length} studies for {trimmedPathName}{" "}
        available at ClinicalTrials.gov.
      </HeadlineText>
      <StudyTable item={trialData} />
    </div>
  );
}
