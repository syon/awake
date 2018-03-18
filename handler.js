export async function helloWorld (event, context, callback) {
  console.log("awaiting 5 seconds...");
  await new Promise(r => setTimeout(r, 5000));
  console.log("await done.");

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    },
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event
    })
  };

  callback(null, response);
};
