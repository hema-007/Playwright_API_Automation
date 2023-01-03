import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  fullyParallel: false,
  use: {
    headless: true,
    baseURL: 'https://api-qa.joinassembly.com/api',
    extraHTTPHeaders: {
      'Content-type': 'application/json'
    }
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' }
    }
  ]
};

export default config;
