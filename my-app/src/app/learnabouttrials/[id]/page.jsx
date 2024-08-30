"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { fetchByDrugName } from "../../../../utils";
import { HeadlineText } from "../../../../components/text";

export default function page() {
  const [trialData, setTrialData] = useState([]);

  const pathname = usePathname();
  const trimmedPathName = pathname.split("/learnabouttrials/")[1];
  const getData = async () => {
    const data = await fetchByDrugName(trimmedPathName);
    const { studies } = data;
    setTrialData(studies);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <HeadlineText>
        Companies can extend their market protection and delay generic
        competition through several strategies: New Indications: If the company
        conducts new clinical trials and gets FDA approval for additional uses
        (indications) of the drug, it may gain additional exclusivity. This does
        not extend the original patent but can delay generics for those new
        uses.
      </HeadlineText>
      <HeadlineText>
        Combination Therapies: Companies may combine their drug with another
        drug (sometimes another patented drug) and seek approval for the
        combination therapy. This can create a new product with its own patent
        or exclusivity period.
      </HeadlineText>
      <HeadlineText>
        Patent Extensions: In some cases, a company can get a patent term
        extension (up to 5 years) under the Hatch-Waxman Act to make up for the
        time lost during the FDA's drug review process. This extension applies
        only to one of the drug's patents, usually the one covering the active
        ingredient.
      </HeadlineText>
      <HeadlineText>
        Reformulation Patents: Companies may create new formulations (e.g.,
        extended-release versions) of the drug or new methods of administration
        (e.g., injectables) and seek new patents for these variations.
      </HeadlineText>
      <p>
        There are currently {trialData.length} studies for {trimmedPathName}.
      </p>
      {trialData.map((item, i) => (
        <div key={i}>{item.protocolSection.statusModule.overallStatus}</div>
      ))}
    </div>
  );
}
