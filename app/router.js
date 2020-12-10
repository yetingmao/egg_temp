/*
 * @Date: 2020-12-08 21:39:20
 * @LastEditors: yetm
 * @LastEditTime: 2020-12-11 06:49:08
 * @FilePath: /egg_temp/app/router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/user')(app);
  require('./router/ai')(app);
  require('./router/drug')(app);
};
