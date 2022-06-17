const { driver, By, until, Key } = require('../../../utils/driver');
const { waitVisibleEle, waitLocatedEle, sleep } = require('../../../utils/common');
const { login, logout } = require('../../../component/index');
async function resourcesExpertRecommend() {
    await sleep(1000);
    await login();
    (await waitLocatedEle(By.xpath(`/html/body/div[1]/section/aside/div/div/ul/li[5]`))).click();
    (await waitVisibleEle(By.xpath("/html/body/div[1]/section/aside/div/div/ul/li[5]/ul/li[2]"))).click();
    (await waitVisibleEle(By.xpath("/html/body/div[1]/section/aside/div/div/ul/li[5]/ul/li[2]/ul/li[2]"))).click();
    const itemName = "webdriver_test";
    //增加
    (await waitLocatedEle(By.xpath(`/html/body/div[1]/section/section/main/div/div[2]/div[1]/div[2]/button[2]`))).click();
    await waitVisibleEle(By.css(`.ant-modal`));

    await driver.findElement(By.xpath(`/html/body/div[1]/section/section/main/div/div[1]/div[2]/div/div[2]/div[2]/div[1]/div[2]/input`)).sendKeys(itemName);
    await driver.findElement(By.xpath(`/html/body/div[1]/section/section/main/div/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/input`)).sendKeys(10);
    await driver.findElement(By.xpath(`/html/body/div[1]/section/section/main/div/div[1]/div[2]/div/div[2]/div[2]/div[3]/div[2]/input`)).sendKeys(itemName);
    await driver.findElement(By.xpath(`/html/body/div[1]/section/section/main/div/div[1]/div[2]/div/div[2]/div[2]/div[4]/div[2]/div`)).click();
    (await waitVisibleEle(By.xpath("/html/body/div[1]/section/section/main/div/div[2]/div[3]/div/div/div/div[2]/div[1]/div/div/div"))).click();
    await (await waitVisibleEle(By.css(`.ant-modal-body`))).click();
    //进度条组件
    const ele = await driver.findElement(By.xpath(`/html/body/div[1]/section/section/main/div/div[1]/div[2]/div/div[2]/div[2]/div[5]/div[2]/div/div[4]`));
    await driver.actions().dragAndDrop(ele, { x: 100, y: 0 }).perform();
    await sleep(1000);
    await driver.findElement(By.xpath("/html/body/div[1]/section/section/main/div/div[1]/div[2]/div/div[2]/div[3]/button[2]")).click();
    //查询
    await sleep(3000);
    await driver.findElement(By.xpath(`/html/body/div[1]/section/section/main/div/div[2]/div[1]/div[1]/input`)).sendKeys(itemName);
    await driver.findElement(By.xpath("/html/body/div[1]/section/section/main/div/div[2]/div[1]/div[2]/button[1]")).click();

    //删除
    await sleep(1000);
    await driver.findElement(By.xpath("/html/body/div[1]/section/section/main/div/div[2]/div[2]/div[2]/div/div/div/div/div/div[2]/table/tbody/tr[2]/td[6]/button[4]")).click();
    (await waitVisibleEle(By.xpath("/html/body/div[1]/section/section/main/div/div[2]/div[3]/div/div/div/div[2]/div/div[2]/button[2]"))).click();

    await sleep(1000);
    await logout();
}
module.exports = {
    resourcesExpertRecommend
}