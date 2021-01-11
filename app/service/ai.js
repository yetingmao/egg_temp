const Service = require('egg').Service;
const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;
class AIService extends Service {

  // 默认不需要提供构造函数。
  // constructor(ctx) {
  //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
  //   // 就可以直接通过 this.ctx 获取 ctx 了
  //   // 还可以直接通过 this.app 获取 app 了
  // }
    async creatClint() {
        const { config } = this;
        // 设置APPID/AK/SK
        const { APP_ID, API_KEY, SECRET_KEY } = config.AI
        // 新建一个对象，建议只保存一个对象调用服务接口
        const client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);
        this.config.AIClint = client;
        return client;
    
  }
}
module.exports = AIService;