SPONSOR:
https://clinicaltrials.gov/api/v2/studies?format=json&query.spons=astrazeneca

DRUG:
https://clinicaltrials.gov/api/v2/studies?query.cond=symbicort

async function fetchDrugTrials(drugName) {
try {
// URL format for searching trials by a specific drug name
const url = `https://clinicaltrials.gov/api/v2/studies?query.cond=${drugName}`;

const response = await fetch(url);

if (!response.ok) {
throw new Error(`HTTP error! Status: ${response.status}`);
}

const data = await response.json();

return data;

} catch (error) {

console.error('Error fetching data:', error);
}
}

//studies[i].protocolSection.statusModule.overallStatus

Companies can extend their market protection and delay generic competition through several strategies:

New Indications: If the company conducts new clinical trials and gets FDA approval for additional uses (indications) of the drug, it may gain additional exclusivity. This does not extend the original patent but can delay generics for those new uses.
Combination Therapies: Companies may combine their drug with another drug (sometimes another patented drug) and seek approval for the combination therapy. This can create a new product with its own patent or exclusivity period.
Patent Extensions: In some cases, a company can get a patent term extension (up to 5 years) under the Hatch-Waxman Act to make up for the time lost during the FDA's drug review process. This extension applies only to one of the drug's patents, usually the one covering the active ingredient.
Reformulation Patents: Companies may create new formulations (e.g., extended-release versions) of the drug or new methods of administration (e.g., injectables) and seek new patents for these variations.
