import { test, expect } from '@playwright/test';

test('Search buses on RedBus', async ({ page }) => {

  // Go to RedBus website
  await page.goto('https://www.redbus.in/');

  // Enter FROM city
  // Enter FROM city
  await page.getByLabel('From').click();
  await page.getByLabel('From').fill('Madurai');
  await page.waitForTimeout(2000); // wait for dropdown
  await page.locator('li >> text=Madurai').first().click();

  // Enter TO city
  await page.getByLabel('To').click();
  await page.getByLabel('To').fill('Chennai');
  await page.waitForTimeout(5000);
  await page.locator('li >> text=Chennai').first().click();

  // Select Date
  await page.locator('#onward_cal').click();
  await page.locator('//td[@class="wd day" or contains(@class,"current")]').first().click();

  // Click Search Buses
  await page.locator('#search_button').click();

  // Verify results page loads
  await expect(page).toHaveURL(/search/);

});