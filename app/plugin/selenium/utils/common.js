const { driver, until } = require('./driver');

async function sleep(time) {
    await driver.sleep(time);
}
async function waitLocatedEle(by) {
    await driver.wait(until.elementLocated(by, 5000));
    const ele = await driver.findElement(by);
    return ele;
}
async function waitVisibleEle(by) {
    const ele = await waitLocatedEle(by);
    await driver.wait(until.elementIsVisible(ele), 5000);
    return ele;
}

module.exports = {
    sleep,
    waitLocatedEle,
    waitVisibleEle
}
