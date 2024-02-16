var assert = require('assert');

describe('Search note Functionality', () => {
  it('# Creating a note file', async () => {
    const searchSelector = await $(`//android.widget.RelativeLayout[@resource-id="com.ogden.memo:id/list_tools"]`);
    await searchSelector.waitForDisplayed({ timeout: 3000 });
    // await searchSelector.click();

    const insertTextSelector = await $('//android.widget.Button[@resource-id="com.ogden.memo:id/btn_iphonememo_main_add"]');
    await insertTextSelector.waitForDisplayed({ timeout: 30000 });
    await insertTextSelector.click();

    const insertText = await $('//android.widget.EditText[@resource-id="com.ogden.memo:id/edit_content"]');
    await insertText.waitForDisplayed({ timeout: 30000 });
    // await insertText.click();

    await insertText.addValue("test");
    await browser.pause(5000);
    // await insertTextSelector.click();

    const saveSelector = await $('//android.widget.Button[@resource-id="com.ogden.memo:id/btn_iphonememo_edit_addmemo"]');
    await saveSelector.waitForDisplayed({ timeout: 30000 });
    await saveSelector.click();
    await browser.pause(5000);

    const noteSelector = await $('//android.widget.Button[@resource-id="com.ogden.memo:id/btn_iphonememo_edit_memo"]');
    await noteSelector.waitForDisplayed({ timeout: 30000 });
    await noteSelector.click();

    //await browser.pause(5000);

    const notePopup = await $('//android.widget.Button[@resource-id="android:id/button1"]');
    await notePopup.waitForDisplayed({ timeout: 30000 });
    await notePopup.click();
    //android.widget.Button[@resource-id="android:id/button1"]
    await browser.pause(5000);

    const openPage = await $('//android.widget.TextView[@text="test"][@resource-id="com.ogden.memo:id/tv_iphonememo_main_listitem_content"]');
    await openPage.waitForDisplayed({ timeout: 30000 })
    const givenText = await openPage.getText();
    console.log(givenText);
    await expect(givenText).toContain("test");
    //await openPage.click();


    // var allProductsName = await $$(`android.widget.TextView`);
    // assert(allProductsName.length > 0);
  });
});
//android.widget.Button[@resource-id="com.ogden.memo:id/btn_iphonememo_main_add"]
//android.widget.EditText[@resource-id="com.ogden.memo:id/edit_content"]
//android.widget.Button[@resource-id="com.ogden.memo:id/btn_iphonememo_edit_addmemo"]
//android.widget.Button[@resource-id="com.ogden.memo:id/btn_iphonememo_edit_memo"]
//android.widget.TextView[@resource-id="com.ogden.memo:id/tv_iphonememo_main_listitem_content"]