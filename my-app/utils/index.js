export async function fetchByDrugName(id) {
  console.log(id);
  try {
    const res = await fetch(`http://localhost:3000/api/clinicaltrials/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
