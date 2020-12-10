/*
 * @Date: 2020-12-11 06:46:08
 * @LastEditors: yetm
 * @LastEditTime: 2020-12-11 06:48:47
 * @FilePath: /egg_temp/app/router/drug.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.resources('drug', '/drug', controller.drug);
};