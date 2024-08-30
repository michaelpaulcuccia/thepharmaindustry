export const GET = async (request, { params }) => {
  try {
    const response = await fetch(
      `https://clinicaltrials.gov/api/v2/studies?query.cond=${params.id}}`
    );
    const data = await response.json();
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return new Response(
      "Error found in app/api/companyoverview/[id]/route.js",
      {
        status: 500,
      }
    );
  }
};
