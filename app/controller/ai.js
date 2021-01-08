/*
 * @Date: 2020-12-08 21:39:20
 * @LastEditors: yetm
 * @LastEditTime: 2021-01-09 06:12:38
 * @FilePath: /egg_temp/app/controller/ai.js
 */
const Controller = require('egg').Controller;
const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;
const fs = require('fs');
class AIController extends Controller {
  async index() {
    const { ctx, config } = this;
    // 设置APPID/AK/SK
    const { APP_ID, API_KEY, SECRET_KEY } = config.AI
    // 新建一个对象，建议只保存一个对象调用服务接口
    const client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);
    const file = ctx.request.files[0];
    const { filepath } = file;
    const { model } = ctx.request.body;
    const image = fs.readFileSync(filepath).toString("base64");
    try {
      const result = await client.advancedGeneral(image);
      ctx.body = JSON.stringify(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AIController;