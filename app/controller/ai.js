const Controller = require('egg').Controller;
const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;
const fs = require('fs');
class AIController extends Controller {
  async index() {
    const { ctx,config } = this;
  // 设置APPID/AK/SK
    const APP_ID = config.AI.APP_ID;
    const API_KEY = config.AI.API_KEY;
    const SECRET_KEY = config.AI.SECRET_KEY;
    // 新建一个对象，建议只保存一个对象调用服务接口
      const client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);
      const image = fs.readFileSync("app/public/img/timg.jpg").toString("base64");
      try {
        const result = await client.advancedGeneral(image);
        ctx.body = JSON.stringify(result);
      } catch (error) {
          console.log(error);
      }
    }
}

module.exports = AIController;