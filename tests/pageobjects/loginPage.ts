import { Locator, Page } from "@playwright/test";

let sixDigitCodeValue: string;

export class loginPage {
  readonly page?: Page;
  readonly welcomeBackText?: Locator;
  readonly emailInput?: Locator;
  readonly nextButton?: Locator;
  readonly verificationCodeInput?: Locator;
  readonly sixDigitCode?: Locator;
  readonly submitButton?: Locator;
  readonly companyNameText?: Locator;
  readonly workspaceListingHeader?: Locator;
  readonly loginWithDifferentEmail?: Locator;
  readonly launchButton?: Locator;
  readonly joinButton?: Locator;
  readonly createAccountHeaderText?: Locator;
  readonly usingAssemblyHeader?: Locator;
  readonly fullNameInput?: Locator;
  readonly getStarted?: Locator;
  readonly companyNameInput?: Locator;
  readonly createWorkspaceButton?: Locator;
  readonly yesRadioButton?: Locator;
  readonly noRadioButton?: Locator;
  readonly settingUpWorkspace?: Locator;
  readonly forMyselfRadioButton?: Locator;
  readonly forMyTeamRadioButton?: Locator;
  readonly forEntireOrgRadioButton?: Locator;
  readonly continueButton?: Locator;
  readonly displayNameInput?: Locator;
  readonly birthdayMonthDropdown?: Locator;
  readonly birthDayDropdown?: Locator;
  readonly hiredMonthDropdown?: Locator;
  readonly hiredDayDropdown?: Locator;
  readonly yearDropdown?: Locator;
  readonly doneButton?: Locator;
  readonly fullNameError?: Locator;
  readonly exploreAssemblyButton?: Locator;
  readonly introJsNextButton?: Locator;
  readonly intorJsHeader?: Locator;
  readonly introJsGetStartedButton?: Locator;

  readonly signinButton?: Locator;
  readonly celebrateTeammateText?: Locator;
  readonly ssoButton?: Locator;
  readonly loginpageHelperText?: Locator;
  readonly helperText?: Locator;
  readonly signInLink?: Locator;
  readonly emailNotFound?: Locator;
  readonly signUp?: Locator;
  readonly resetPassword?: Locator;
  readonly messageHeaderText?: Locator;
  readonly confirmButton?: Locator;
  readonly goBackToButtonSignInButton?: Locator;
  readonly takeMeBackButton?: Locator;
  readonly chatWithusLink?: Locator;
  readonly sendEmailButton?: Locator;
  readonly signupWithSlack?: Locator;
  readonly signinWithSlack?: Locator;
  readonly slackDomainInputField?: Locator;
  readonly slackContineButton?: Locator;
  readonly slackEmailInput?: Locator;
  readonly slackPasswordInput?: Locator;
  readonly slackSignInButton?: Locator;
  readonly slackAllowButton?: Locator;
  readonly signinWithSSOButton?: Locator;
  readonly logInWithSamlButton?: Locator;
  readonly returnToSignInLink?: Locator;
  readonly signupWithOffice365?: Locator;
  readonly signinWithOffice365?: Locator;
  readonly signupWithGsuite?: Locator;
  readonly signinWithGsuite?: Locator;
  readonly useSSOText?: Locator;

  readonly officeEmailInput?: Locator;
  readonly officeSubmitButton?: Locator;
  readonly officePasswordInput?: Locator;
  readonly officeSignInNoButton?: Locator;

  constructor(page: Page) {
    this.page = page;

    // Email and Password related locators
    this.welcomeBackText = page.locator("text=Welcome back!");
    this.emailInput = page.locator("//input[@type='email']");
    this.nextButton = page.locator("//button[contains(text(), 'Next')]");
    this.verificationCodeInput = page.locator("//input[@type='number']");
    this.sixDigitCode = page.locator(
      "//p[contains(text(), 'Your verification code is:')]/following-sibling::span"
    );
    this.submitButton = page.locator("//button[@type='submit']");
    this.companyNameText = page.locator(
      "//h5[contains(text(), 'What’s the name of your company or team?')]"
    );
    this.workspaceListingHeader = page.locator("//h2");

    this.signinButton = page.locator(
      "//span[contains(text(), 'Sign in')]/ancestor::button"
    );
    this.celebrateTeammateText = page.locator(
      "//div[contains(text(), 'Give')]"
    );
    this.ssoButton = page.locator("//div[@data-testid='signin']");
    this.loginpageHelperText = page.locator(
      "//div[@data-testid='text-field']/p"
    );
    this.messageHeaderText = page.locator("//h4");

    //Get started related locators
    this.signUp = page.locator("//a[@href='/create-account']");
    this.confirmButton = page.locator(
      "//span[contains(text(), 'Confirm')]/ancestor::button"
    );
    this.goBackToButtonSignInButton = page.locator(
      "//span[contains(text(), 'Go back to Sign In')]"
    );
    this.loginWithDifferentEmail = page.locator(
      "//button[contains(text(), 'Log in with a different email')]"
    );
    this.launchButton = page.locator(
      "(//p[contains(text(), 'Launch')])[1]/ancestor::button[1]"
    );
    this.joinButton = page.locator("(//p[contains(text(), 'Join')])[3]");
    this.getStarted = page.locator(
      "(//p[contains(text(), 'Get started')])[1]/ancestor::button[1]"
    );
    this.companyNameInput = page.locator("//input[@name='assemblyName']");
    this.createWorkspaceButton = page.locator(
      "//button[contains(text(), 'Create my workspace')]"
    );
    this.yesRadioButton = page.locator("//input[@id='yes']");
    this.noRadioButton = page.locator("//input[@id='no']");
    this.createAccountHeaderText = page.locator("//h2");
    this.usingAssemblyHeader = page.locator("//h4");
    this.settingUpWorkspace = page.locator("//h5");
    this.forMyselfRadioButton = page.locator(
      "(//span[@class='MuiIconButton-label'])[1]"
    );
    this.forMyTeamRadioButton = page.locator(
      "(//span[@class='MuiIconButton-label'])[2]"
    );
    this.forEntireOrgRadioButton = page.locator(
      "(//span[@class='MuiIconButton-label'])[3]"
    );
    this.continueButton = page.locator("//span[contains(text(), 'Continue')]");
    this.fullNameInput = page.locator("//input[@name='fullName']");
    this.displayNameInput = page.locator("//input[@name='displayName']");
    this.birthdayMonthDropdown = page.locator(
      "(//label[contains(text(), 'Month')])[1]/../div/button"
    );
    this.birthDayDropdown = page.locator(
      "(//label[contains(text(), 'Day')])[1]/../div/button"
    );
    this.hiredMonthDropdown = page.locator(
      "(//label[contains(text(), 'Month')])[2]/../div/button"
    );
    this.hiredDayDropdown = page.locator(
      "(//label[contains(text(), 'Day')])[2]/../div/button"
    );
    this.yearDropdown = page.locator(
      "(//label[contains(text(), 'Year')])[1]/../div/button"
    );
    this.doneButton = page.locator("//button[@type='submit']");
    this.fullNameError = page.locator("//span[@data-testid='fullNameError']");
    this.exploreAssemblyButton = page.locator(
      "//button[contains(text(), 'Explore Assembly')]"
    );
    this.introJsNextButton = page.locator(
      "//a[@class='introjs-button introjs-nextbutton introjs-fullbutton']"
    );
    this.intorJsHeader = page.locator(
      "//h6[contains(text(), 'Welcome to your Assembly workspace!')]"
    );
    this.introJsGetStartedButton = page.locator(
      "//a[contains(text(), 'Get started')]"
    );

    //slack related locators
    this.signinWithSlack = page.locator("button:has-text('Log in with Slack')"); //Log in with Slack
    this.signupWithSlack = page.locator(
      "button:has-text('Sign up with Slack')"
    );
    this.slackDomainInputField = page.locator(
      "//input[@data-qa='signin_domain_input']"
    );
    this.slackContineButton = page.locator("//button[@type='submit']");
    this.slackEmailInput = page.locator("//input[@data-qa='login_email']");
    this.slackPasswordInput = page.locator(
      "//input[@data-qa='login_password']"
    );
    this.slackSignInButton = page.locator("//button[@id='signin_btn']");
    this.slackAllowButton = page.locator("//button[@type='submit']");
    this.signinWithSSOButton = page.locator(
      "//button[contains(text(), 'Log in with')]"
    );
    this.logInWithSamlButton = page.locator(
      "//button[contains(text(), 'Log in with')]"
    );
    this.returnToSignInLink = page.locator("text=Return to sign in");

    //office365 related locators
    this.signinWithOffice365 = page.locator(
      "button:has-text('Log in with Office 365')"
    );
    this.signupWithOffice365 = page.locator(
      "button:has-text('Sign up with Office 365')"
    );

    this.officeEmailInput = page.locator("//input[@type='email']");
    this.officeSubmitButton = page.locator("//input[@type='submit']");
    this.officePasswordInput = page.locator("//input[@type='password']");
    this.officeSignInNoButton = page.locator("//input[@id='idBtn_Back']");

    //Gsuite related locators
    this.signinWithGsuite = page.locator(
      "button:has-text('Sign in with Google')"
    );
    this.signupWithGsuite = page.locator(
      "button:has-text('Sign up with Google')"
    );
    this.useSSOText = page.locator("text=Please use your SSO");
  }

  async sendUserEmail(username: string) {
    await this.emailInput?.type(username);
    await this.nextButton?.click();
  }

  async getHelperErrorMessage() {
    const helperText = await this.loginpageHelperText?.innerText();
    if (helperText) {
      console.log("Message is : ", helperText);
    } else {
      console.log("Failed to capture error message");
      throw new Error();
    }
    return helperText;
  }

  async validateResetPasswordSendEmailButton() {
    await this.sendEmailButton?.isDisabled();
    if (this.sendEmailButton?.isDisabled()) {
      await this.signInLink?.isVisible();
    } else {
      throw new Error();
    }
  }

  async validateConfirmButtonStatus() {
    await this.confirmButton?.isDisabled();
    if (this.confirmButton?.isDisabled()) {
      await this.signInLink?.isVisible();
    } else {
      throw new Error();
    }
  }

  async validateHeaderMessage() {
    const headerText = await this.messageHeaderText?.innerText();
    if (headerText) {
      console.log("Message is : ", headerText);
    } else {
      console.log("Failed to capture error message");
      throw new Error();
    }
    //Move below line to respective steps.ts file when created
    // expect(this.chatWithusLink).to.exist;
    return headerText;
  }

  async validateWhenSsoIsConnected() {
    const ssoText = await this.useSSOText?.innerText();
    if (ssoText) {
      console.log("Message is : ", ssoText);
    } else {
      console.log("Failed to capture error message");
      throw new Error();
    }
    //Move below line to respective steps.ts file when created
    //expect(this.signinWithSSOButton).to.exist;
    return ssoText;
  }

  async renderContent(content: string) {
    const url = "http://email";
    await this.page?.route(url, (route) => {
      void route.fulfill({ body: content });
    });
    await this.page?.goto(url);
  }

  async fetchSixDigitCode() {
    const sixDigit = await this.sixDigitCode?.innerText();
    sixDigitCodeValue = sixDigit as string;
    //console.log('Six Digit Verification Code is : ', sixDigitCodeValue);
    return sixDigitCodeValue;
  }

  async sendSixDigitCode() {
    await this.page?.goBack();
    await this.verificationCodeInput?.type(sixDigitCodeValue);
  }

  async waitForSignout() {
    (await this.launchButton?.isVisible()) == true;
    await this.loginWithDifferentEmail?.click();
  }

  async selectMonth(month: string) {
    await this.page?.locator(`//span[contains(text(), '${month}')]`).click();
  }

  async selectDate(date: string) {
    await this.page
      ?.locator(`(//span[contains(text(), '${date}')])[1]`)
      .click();
  }

  async selectLeapYearDate(date: string) {
    await this.page?.locator(`//span[contains(text(), '${date}')]`).click();
  }

  async selectYear(year: string) {
    await this.page?.locator(`//span[contains(text(), '${year}')]`).click();
  }

  //Login with Office365 function
  async office365Login(officeEmail: string, officePassword: string) {
    await this.signinWithOffice365?.click();
    await this.officeEmailInput?.click();
    await this.officeEmailInput?.fill(officeEmail);
    await this.officeSubmitButton?.click();
    await this.page?.waitForTimeout(2000);
    await this.officePasswordInput?.fill(officePassword);
    await this.officeSubmitButton?.click();
    await this.page?.waitForTimeout(2000);
    await this.officeSignInNoButton?.click();
  }
}
