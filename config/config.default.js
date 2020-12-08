/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path');
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1604458959317_6553';

  // add your middleware config here
  config.middleware = [];
  //sequelize
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'test',
    password: "1234",
  };
  config.AI = {
    APP_ID: '23046044',
    API_KEY: "xeXaxPynWsMk8qXoOnpIEhl6",
    SECRET_KEY :"XmsSUWd18k3QKSQpmtPTOLilWt3nPgtG",
  };
  // config.static   = {
  //   // 如果还有其他模板引擎，需要合并多个目录
  //   publicPath: path.join(appInfo.baseDir, 'app/assets'),
  // };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    
  };

  return {
    ...config,
    ...userConfig,
  };
};
