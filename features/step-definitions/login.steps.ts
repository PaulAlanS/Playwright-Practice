import{Given, When, Then} from '@cucumber/cucumber';
import {chromium, Browser, Page} from '@playwright/test';
import { SauceDemoLogin } from '../../pages/sauce_demo_login';

let browser: Browser;
let page: Page;
let login1: SauceDemoLogin; 

Given('I am in login page', async function(){
    browser = await chromium.launch();
    let context = await browser.newContext();
    page = await context.newPage();
    login1 = new SauceDemoLogin(page);
    login1.goTo();
})

When('I enter email {string} and password {string}',async function(email: string, password: string){
    login1.login(email,password);
})

Then('I should see the heading Your Acoount.', async function(){
    login1.checkForHeading();
})

