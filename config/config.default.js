/*
 * @Date: 2020-12-11 20:38:23
 * @LastEditors: yetm
 * @LastEditTime: 2020-12-12 04:04:27
 * @FilePath: /egg_temp/config/config.default.js
 */
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
    SECRET_KEY: "XmsSUWd18k3QKSQpmtPTOLilWt3nPgtG",
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // config.static   = {
  //   // 如果还有其他模板引擎，需要合并多个目录
  //   publicPath: path.join(appInfo.baseDir, 'app/assets'),
  // };
  // config.assets = {
  //   devServer: {
  //       command: '',
  //       port: 8008,
  //     },
  //   };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',

  };
  // const cluster  = {
  //   listen: {
  //   port: 7001,
  //   hostname: '127.0.0.1', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
  //   // path: '/var/run/egg.sock',
  //   }
  // };

  return {
    ...config,
    ...userConfig,
    //...cluster,
  };
};
