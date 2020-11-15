import { APIGatewayProxyEvent } from 'aws-lambda';
import fetch from 'node-fetch';
import { FormData } from '../pages/contacts';
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { X_WRITE_API_KEY, SITE_URL } = process.env;

export const handler = async (
  event: APIGatewayProxyEvent,
) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  const URL = `https://ryusou-mtkh.microcms.io/api/v1/contacts`;
  return await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-WRITE-API-KEY': `${X_WRITE_API_KEY}`,
    },
  })
    .then((response) => response.json())
    .then((data: FormData) => ({
      statusCode: 200,
      body: JSON.stringify(data),
    }))
    .catch((error) => ({
      statusCode: 422,
      body: String(error),
    }));
};
