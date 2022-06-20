/**
 */
const { driver } = require('./utils/driver');
const { sleep } = require('./utils/common');
const { needProposeModel } = require('./pages/need/propose');

async function run(_driver) {
    try {

        //登录
        await _driver.get("http://127.0.0.1:3000/login")
        // 需求管理
        // 需求提报(ok)
        //  await needProposeModel(_driver)

        // 资源管理
        //专家库
        //专家管理(ok)
        // await resourcesExpertExpert()
        //推荐配置(ok)
        //await resourcesExpertRecommend()
        //领域管理(ok)
        // await resourcesExpertSpecialty()
        // 项目库
        // 项目管理 
        // await resourcesProjectOperation();
        // 批次管理
        //  await resourcesProjectBatch();

        //基础管理
        //用户管理
        // await userModel();

    } catch (e) {
        console.log("error", e)
    }
    finally {
        //关闭浏览器
        await sleep(_driver, 10000)
        await _driver.quit();
    }
}



module.exports = {
    driver, run
};