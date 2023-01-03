import { Page } from '@playwright/test';
import axios from 'axios';
import { URLSearchParams } from 'url';
import { EmailBody } from '../types/email';

const keys = {
  apikey: 'f2a055df-b232-42df-8238-b031b19e9257',
  apisecret: '57796ed2-58a3-45b9-948b-2e60288e518c'
};

const requestOptions = {
  headers: {
    Accept: 'application/json'
  }
};

export type Email = {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
};

export const getLatestEmail = async function (email: string): Promise<Email> {
  const queryParams = new URLSearchParams({
    ...keys,
    to: email.split('@')[0],
    domain: email.split('@')[1]
  }).toString();
  // console.log("query param is", queryParams);
  const emailurl = 'https://api.mail7.io';
  const url = `${emailurl}/inbox?${queryParams}`;
  // console.log("URl param is", url);
  let triesLeft = 10;
  do {
    const response = await axios.get<EmailBody>(url, requestOptions);
    //console.log('Response is : ', response);
    if (response.status == 200) {
      const emailBody = response.data;
      //console.log('Email Body is : ', emailBody);
      try {
        if (emailBody.data.length > 0) {
          //await this.page?.waitForTimeout(500);
          const mesId = emailBody.data[0]._id;
          const rawEmail = emailBody.data[0].mail_source;
          //console.log('Raw Email is : ', JSON.stringify(rawEmail));
          await deleteEmail.call(this, mesId);
          return {
            from: rawEmail.from.value[0].address,
            to: rawEmail.to.value[0].address,
            subject: rawEmail.subject,
            text: rawEmail.text,
            html: rawEmail.html
          };
        }
      } catch (error) {
        let errorMessage = 'Failed to do get the Latest Email';
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        console.log(errorMessage);
      }
      //await this.page?.waitForTimeout(2000);
    } else {
      const data = JSON.stringify(response.data);
      console.error(`Could not read emails: ${data}`);
    }
    triesLeft--;
  } while (triesLeft);
  throw console.error(`Inbox is empty for ${email}`);
};

async function deleteEmail(id: string) {
  const queryParams = new URLSearchParams({ ...keys, mesid: id }).toString();
  const emailUrl = 'https://api.mail7.io';
  const url = `${emailUrl}/delete?${queryParams}`;
  const response = await axios.get(url);
  if (!response) {
    const data = JSON.stringify(response);
    console.error(`Could not delete email: ${data}`);
  }
}

export const getLatestEmailForsession = async function (email: string): Promise<Email> {
  const queryParams = new URLSearchParams({
    ...keys,
    to: email.split('@')[0],
    domain: email.split('@')[1]
  }).toString();
  const emailurl = 'https://api.mail7.io';
  const url = `${emailurl}/inbox?${queryParams}`;
  let triesLeft = 10;
  do {
    const response = await axios.get<EmailBody>(url, requestOptions);
    if (response.status == 200) {
      const emailBody = response.data;
      try {
        if (emailBody.data.length > 0) {
          const mesId = emailBody.data[0]._id;
          const rawEmail = emailBody.data[0].mail_source;
          await deleteEmailForSession(mesId);
          return {
            from: rawEmail.from.value[0].address,
            to: rawEmail.to.value[0].address,
            subject: rawEmail.subject,
            text: rawEmail.text,
            html: rawEmail.html
          };
        }
      } catch (error) {
        let errorMessage = 'Failed to do get the Latest Email';
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        console.log(errorMessage);
      }
    } else {
      const data = JSON.stringify(response.data);
      console.error(`Could not read emails: ${data}`);
    }
    triesLeft--;
  } while (triesLeft);
  throw console.error(`Inbox is empty for ${email}`);
};

async function deleteEmailForSession(id: string) {
  const queryParams = new URLSearchParams({ ...keys, mesid: id }).toString();
  const emailUrl = 'https://api.mail7.io';
  const url = `${emailUrl}/delete?${queryParams}`;
  const response = await axios.get(url);
  if (!response) {
    const data = JSON.stringify(response);
    console.error(`Could not delete email: ${data}`);
  }
}
