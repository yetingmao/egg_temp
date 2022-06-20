

const { Builder, By, Key, until, actions } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();
options.addArguments('--ignore-certificate-errors')//忽略这些证书错误
options.addArguments('--ignore -ssl-errors')
options.addArguments('--disable-gpu')
options.excludeSwitches('enable-logging')
const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options);
//.build();//创建一个浏览器实例


module.exports = {
    driver,
    By,
    until,
    Key
}