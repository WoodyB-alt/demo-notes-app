export default function handler(lambda) {
    return async function (event, context) {
      let body, statusCode;

      try {
        // Run the Lambda
        body = await lambda(event, context);
        statusCode = 200;
      } catch (e) {
        console.error(e);
        body = { error: e.message };
        statusCode = 500;
      }

      // Return HTTP response
      return {
        body,
        statusCode,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
      };
    };
  }