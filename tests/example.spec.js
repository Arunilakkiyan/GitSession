// @ts-check
import { test, expect } from '@playwright/test';

test('task on basic elements', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator('input[value="radio2"]').check()
  await expect(page.locator('input[value="radio2"]')).toBeChecked()
  var options=["option1","option3"]
  for(let opt of options){
  await page.locator(`input[value="${opt}"]`).check()
  }
  await expect(page.locator('input[value="option1"]')).toBeChecked()



  console.log("Arun Update V01")

  console.log("Ram New Update V02")


});

