/*
 * @Date: 2020-12-08 21:39:20
 * @LastEditors: yetm
 * @LastEditTime: 2021-01-09 06:12:38
 * @FilePath: /egg_temp/app/controller/ai.js
 */
const Controller = require('egg').Controller;
const fs = require('fs');
class AIController extends Controller {
  async index() {
    const { ctx, config } = this;
    const client = config.AIConfig ? config.AIConfig : await ctx.service.ai.creatClint();
    const file = ctx.request.files[0];
    const { filepath } = file;
    const image = fs.readFileSync(filepath).toString("base64");
    const { model } = ctx.request.body;
    try {
      let result;
      switch (model) {
        case "dongwugugefenxi":
            result = await client.advancedGeneral(image);
          break;
         case "zhiwu":
            result = await client.plantDetect(image);
          break;
         case "shicai":
            result = await client.ingredient(image);
          break;
        default:
            result = await client.advancedGeneral(image);
          break;
      }
      ctx.body = JSON.stringify(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AIController;