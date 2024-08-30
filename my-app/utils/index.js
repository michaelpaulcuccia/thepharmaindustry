export async function fetchByDrugName(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/clinicaltrials/${id}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
