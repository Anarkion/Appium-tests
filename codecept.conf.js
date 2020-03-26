const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      host: 'localhost',
      port: 4723,
      platform: 'Android',
      restart: false,
      capabilities: {
        platformName: "Android",
        platformVersion: "7.1",
        deviceName: "emulator-5554",
        appPackage: "com.android.calculator2",
        appActivity: "com.android.calculator2.Calculator"
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Test',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}