import{test,expect,chromium,Locator} from '@playwright/test'

test('test case name',async({page})=>{

    await page.goto('https://www.google.com/')
    const mySS = page.screenshot({path:'/Users/Downloads/screenshot.png', fullPage:true})
    await expect(page).toHaveScreenshot('base_lineSS.png')

})

test('TC test',async()=>{

    const chromeBrowser = await chromium.launch()   
    const brContext = await chromeBrowser.newContext()
    const page1 = await brContext.newPage()
    const page2 = await brContext.newPage()
    await page1.goto('https://www.google.com/')
    await page2.goto('https://www.facebook.com/')

    await expect(page1).toHaveTitle(/Google/)
     await expect(page2).toHaveTitle(/Facebook/)

})