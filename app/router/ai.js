'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
   router.get('/ai', controller.ai.index);
//   router.resources('users','/users', controller.users);
};