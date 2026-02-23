import { test, expect, Locator } from '@playwright/test';

test('verify css locators',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    //const username: Locator = page.locator('input#user-name');
    //const submit: Locator = page.locator('html>body>div#root>>div.login-box>>input[type=submit]');//>div:nth:child()');
    const username: Locator = page.locator('input#user-name');
    await expect(username).toBeVisible();
    //await username.fill('myUsername');
    
})

test('verify css locators via patterns',async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    const username: Locator = page.locator('div[class^=login]');
    //^ symbol represents starts with, so it will find the element which has class name starting with login
    const pass: Locator = page.locator('div[class$=container]');
    //$ symbol represents ends with, so it will find the element which has class name ending with container
    const middle: Locator = page.locator('div[class*="middle"]');
    // * symbol represents contains, so it will find the element which has class name containing middle
    const notUsername: Locator = page.locator('input:not([placeholder="Username"])');
    //not selector is used to find the element which does not have the attribute value pair, in this case it will find the password field
    await expect(username).toBeVisible();
    //await username.fill('myUsername');
    
})


test('verify css locators via siblings',async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    const username: Locator = page.locator('div.inventory_item+div:nth-child(4)');
    
})

test('verify xpath',async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    const locator1: Locator = page.locator('//div[contains(@class,"header_container")]');
    const locator2: Locator = page.locator('//div[starts-with(@class,"header")]');
    const locator3: Locator = page.locator('//div[text()="Sauce Labs Backpack"]');

    
})