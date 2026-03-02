import {Page, Locator, expect} from '@playwright/test';

export class SauceDemoLogin{
    readonly page: Page;
    readonly logIn_locator: Locator;
    readonly email_loacator: Locator;
    readonly password_locator: Locator;
    readonly signIn_locator: Locator;

    constructor(page: Page){
        this.page = page;
        this.logIn_locator = page.locator('#customer_login_link').nth(0);
        this.email_loacator = page.locator('#customer_email');
        this.password_locator = page.locator('#customer_password');
        this.signIn_locator = page.getByRole('button',{name:"Sign In"});
    }   

    async goTo(){
        await this.page.goto('https://sauce-demo.myshopify.com/cart');
    }

    async login(email: string, password: string){
        await this.logIn_locator.click();
        await this.email_loacator.fill(email);
        await this.password_locator.fill(password);
        await this.signIn_locator.click();
    }

    async checkForHeading(){
        await expect(this.page.getByRole('heading',{level: 2, name:"Your Account"})).toBeVisible();
    }

}