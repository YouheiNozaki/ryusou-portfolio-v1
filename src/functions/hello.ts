import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = (
  event,
  context,
  callback,
) => {
  const subject =
    event.queryStringParameters?.name ?? 'World';
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(`Hello ${subject}`),
  });
};
