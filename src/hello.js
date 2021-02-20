export function hello (event, context, callback) {
  console.log(event);
  console.log(context);
  
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify({ message: 'Hello World!' }),
  };
  
  callback(null, response);
}