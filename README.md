# appium-test

<img width="537" alt="Screen Shot 2566-07-26 at 21 55 11" src="https://github.com/emperol2/appium-test/assets/531184/cd649ba3-6a85-4527-8e50-be4c353c01bd">

### Installation

1. Follow the Quickstart Intro from the Appium document: https://appium.io/docs/en/2.0/quickstart/
2. Install Appium by running this command `npm i --location=global appium` it can be replaced by `npm i -g appium`
3. Run this command to install the driver `appium driver install uiautomator2`
4. Set up Android automation requirements by specifying `ANDROID_HOME` and `JAVA_HOME` from here https://appium.io/docs/en/2.0/quickstart/uiauto2-driver/
5. Install Appium Doctor to help fix the setup issue by running `npm install -g appium-doctor`
6. Run this command to check for Android `appium-doctor --android`
7. If you are using zshrc **("Oh My ZSH!")**, you will need to edit and export the path for `ANDROID_HOME` and `JAVA_HOME`

```
# Android SDK
export ANDROID_HOME=/Users/{your_username}/Library/Android/sdk
export JAVA_HOME=/Library/Java/JavaVirtualMachines/temurin-20.jdk/Contents/Home
```

8. To install JDK, you can use the Homebrew command `brew install --cask temurin`
9. Open up the Android Studio and start the Android virtual device
10. Run this command on another terminal window to execute the test; `node android-test.js`
