import { test, expect } from '@playwright/test';

test('login check', async({page})=>{
    await page.goto('https://sauce-demo.myshopify.com/cart');
    await page.getByRole('link',{name :'Log In'}).click();
    await page.locator('#customer_email').fill('bdnu@gmail.com');
    await page.getByRole('textbox',{name : 'Password'}).fill('1N2B3V');
    
})  