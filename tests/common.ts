import { expect, test } from '@playwright/test';
import { getLatestEmail } from '../utilities/mailUtils';
import { loginPage } from './pageobjects/loginPage';

const emailid = 'hema+devtestuser1@mail7.io';
let sixDigitCode: string;
export let token: { jwtToken: any };

module.exports = {
  BaseTest: async function ({ request, page, baseURL }) {
    const verificationCode = await request.post(`${baseURL}/v3/users/verificationCode`, {
      data: {
        email: emailid,
        type: 'login'
      }
    });
    console.log(verificationCode.status());
    const email = await getLatestEmail(emailid);
    const loginPageObject = new loginPage(page);
    await loginPageObject.renderContent(email.html);
    sixDigitCode = await loginPageObject.fetchSixDigitCode();
    // console.log(sixDigitCode);
    // console.log(verificationCode.status());
    expect(verificationCode.status()).toBe(200);
    const verifyCode = await request.post(`${baseURL}/v3/users/verify`, {
      data: {
        email: emailid,
        code: sixDigitCode,
        type: 'login'
      }
    });
    //console.log(verifyCode.status());
    expect(verifyCode.status()).toBe(200);
    const cookie = verifyCode.headers()['set-cookie'];
    const fetchWorkspace = await request.post(`${baseURL}/v3/users/workspace`, {});
    expect(fetchWorkspace.status()).toBe(200);
    const response = await fetchWorkspace.json();
    const assemblyId = response.partOf[0]?.assemblyId;
    console.log('Assembly ID is : ', assemblyId);
    const loginToken = await request.post(`${baseURL}/v3/users/session/login`, {
      data: {
        assemblyId: assemblyId
      }
    });
    expect(loginToken.status()).toBe(200);
    token = await loginToken.json();
    return token;
  }
};
