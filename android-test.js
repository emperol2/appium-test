const { remote } = require('webdriverio');
const { expect } = require('chai');

const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android',
    'appium:appPackage': 'com.android.settings',
    'appium:appActivity': '.Settings',
};

const wdOpts = {
    hostname: process.env.APPIUM_HOST || '127.0.0.1',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities,
};

async function runTest() {
    const driver = await remote(wdOpts);
    try {
        const batteryItem = await driver.$('//*[@text="Battery"]');
        await batteryItem.click();
        const batteryValueText = await driver.$(`//*[@resource-id="com.android.settings:id/usage_summary"]`).getText();

        expect(batteryValueText).to.equal('100 %');

    } finally {
        await driver.pause(1000);
        await driver.deleteSession();
    }
}

runTest().catch(console.error);