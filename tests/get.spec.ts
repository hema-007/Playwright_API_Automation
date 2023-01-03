import { test, expect, request } from '@playwright/test';
const common = require('./common');

let responseJWTToken: { jwtToken: any };

test('Get JWT token', async ({ request, page, baseURL }) => {
  responseJWTToken = await common.BaseTest({ request, page, baseURL });
  //console.log('JWT token value is', responseJWTToken.jwtToken);
});

test('Get flow activity updates', async ({ request, baseURL }) => {
  const getFlowActivityUpdate = await request.get(`${baseURL}/v3/feed/flows/activity`, {
    headers: {
      Authorization: `JWT ${responseJWTToken.jwtToken}`
    }
  });
  console.log('Get flow activity update status is : ', getFlowActivityUpdate.status());
  expect(getFlowActivityUpdate.status()).toBe(200);
  const response = await getFlowActivityUpdate.json();
  console.log(response);
});

test('Get Flows Archived', async ({ request, baseURL }) => {
  const getQuickInfoResponse = await request.get(`${baseURL}/v3/feed/flows/list/archived`, {
    headers: {
      Authorization: `JWT ${responseJWTToken.jwtToken}`
    }
  });
  console.log('Get flow activity update status is : ', getQuickInfoResponse.status());
  expect(getQuickInfoResponse.status()).toBe(200);
  const response = await getQuickInfoResponse.json();
  console.log(response);
  expect(response.data[0].flowId).toBeTruthy();
});
