export const GET = async (request, { params }) => {
  try {
    const response = await fetch(
      `https://api.fda.gov/drug/label.json?search=openfda.brand_name:%22${params.id}%22`
    );
    const data = await response.json();
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return new Response("Error found in app/api/indications/[id]/route.js", {
      status: 500,
    });
  }
};
