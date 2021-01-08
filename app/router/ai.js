/*
 * @Date: 2020-12-08 21:39:20
 * @LastEditors: yetm
 * @LastEditTime: 2021-01-09 05:39:52
 * @FilePath: /egg_temp/app/router/ai.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/ai', controller.ai.index);
  //   router.resources('users','/users', controller.users);
};