const { until } = require('./driver');

async function sleep(driver, time) {
    await driver.sleep(time);
}
async function waitLocatedEle(driver, by) {
    await driver.wait(until.elementLocated(by, 5000));
    const ele = await driver.findElement(by);
    return ele;
}
async function waitVisibleEle(driver, by) {
    const ele = await waitLocatedEle(driver, by);
    await driver.wait(until.elementIsVisible(ele), 5000);
    return ele;
}

module.exports = {
    sleep,
    waitLocatedEle,
    waitVisibleEle
}
