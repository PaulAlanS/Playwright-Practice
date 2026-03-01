import { test, expect } from '@playwright/test'

test('booking bus in redbus', async({page})=>{
    await page.goto('https://www.redbus.in/');
    
    await page.locator('#srcinput').fill('Chennai');
    await page.getByRole('option').first().click();

    await page.locator('#destinput').fill('Madurai');
    await page.locator('div[role = "option"]').first().click();

    //await page.locator('span',{hasText :'Date of Journey'}).click();
    //await page.getByRole('combobox',{name : 'Search for Tomorrow'}).click();

})