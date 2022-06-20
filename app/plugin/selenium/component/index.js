

const { By } = require('../utils/driver');
const { waitVisibleEle, waitLocatedEle, sleep } = require('../utils/common');

async function login(driver) {
    await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/form/div[1]/div[2]/div/div/input")).sendKeys("admin");
    await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/form/div[2]/div[2]/div/div/span/input")).sendKeys("admin123");
    await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/form/div[4]/div/div/div/button")).click();
}

async function logout(driver) {
    await driver.findElement(By.xpath(`/html/body/div[1]/section/section/div/div[2]/ul/li/img`)).click();
    (await waitVisibleEle(By.xpath(`/html/body/div[1]/section/section/div/div[2]/ul/li/div/div/div/ul/li/ul/li[2]`))).click();
}

module.exports = {
    login,
    logout
}
