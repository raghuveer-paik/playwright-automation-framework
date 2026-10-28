import { test, expect } from '@playwright/test';

test('Launch Automation Exercise', async ({ page }) => {

  await page.goto('https://automationexercise.com');

  await expect(page).toHaveTitle(/Automation Exercise/);

});