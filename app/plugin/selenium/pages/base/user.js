const { driver, By, until, Key } = require('../../utils/driver');
const { waitVisibleEle, waitLocatedEle, sleep } = require('../../utils/common');

async function userModel() {
    //用户管理
    (await waitLocatedEle(By.xpath(`/html/body/div[1]/section/aside/div/div/ul/li[6]`))).click();
    (await waitVisibleEle(By.xpath("/html/body/div[1]/section/aside/div/div/ul/li[6]/ul/li[2]"))).click();
    //增加用户
    (await waitLocatedEle(By.xpath(`/html/body/div[1]/section/section/main/div/div/div/div[1]/button`))).click();
    await waitVisibleEle(By.css(`.ant-modal`));
    await driver.findElement(By.xpath(`/html/body/div[3]/div/div[2]/div/div[2]/div[2]/div[1]/div[2]/input`)).sendKeys("test");
    await driver.findElement(By.xpath(`/html/body/div[3]/div/div[2]/div/div[2]/div[2]/div[2]/div[2]/input`)).sendKeys("nicheng");
    await driver.findElement(By.xpath(`/html/body/div[3]/div/div[2]/div/div[2]/div[2]/div[3]/div[2]/input`)).sendKeys("test123");
    await driver.findElement(By.xpath(`/html/body/div[3]/div/div[2]/div/div[2]/div[2]/div[4]/div[2]/input`)).sendKeys("17612156235");
    await driver.findElement(By.xpath(`/html/body/div[3]/div/div[2]/div/div[2]/div[2]/div[5]/div[2]/div/div`)).click();
    (await waitVisibleEle(By.xpath("/html/body/div[4]/div/div/div/div[2]/div[1]/div/div/div[1]"))).click();
    await driver.findElement(By.css(`body`)).click();
    await driver.findElement(By.xpath(`/html/body/div[3]/div/div[2]/div/div[2]/div[3]/button[2]`)).click();
    //删除用户
    await sleep(3000);
    const el = await driver.findElements(By.xpath(`/html/body/div[1]/section/section/main/div/div/div/div[2]/div/div/div/div/div/div[2]/table/tbody/tr`));
    await driver.findElement(By.xpath(`/html/body/div[1]/section/section/main/div/div/div/div[2]/div/div/div/div/div/div[2]/table/tbody/tr[${el.length}]/td[5]/div/button[2]`)).click();
    (await waitVisibleEle(By.xpath(`/html/body/div[1]/section/section/main/div/div/div/div[1]/div/div/div/div/div[2]/div/div[2]/button[2]`))).click();
}