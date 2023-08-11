import { expect } from "@wdio/globals";
// import { remote } from "webdriverio";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    // const capabilities = {
    //   platformName: "Android",
    //   "appium:automationName": "UiAutomator2",
    //   "appium:deviceName": "Android",
    //   "appium:appPackage": "com.android.settings",
    //   "appium:appActivity": ".Settings",
    // };

    // const wdOpts = {
    //   hostname: process.env.APPIUM_HOST || "127.0.0.1",
    //   port: 4723,
    //   capabilities,
    // };

    // const driver = await remote(wdOpts);
    const batteryItem = await driver.$('//*[@text="Battery"]');
    await batteryItem.click();
    const batteryValueText = await driver
      .$(`//*[@resource-id="com.android.settings:id/usage_summary"]`)
      .getText();

    await expect(batteryValueText).toBe("100 %");
  });
});
