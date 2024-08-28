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
