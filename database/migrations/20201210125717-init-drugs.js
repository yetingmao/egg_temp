/*
 * @Date: 2020-12-10 20:57:16
 * @LastEditors: yetm
 * @LastEditTime: 2020-12-11 06:38:03
 * @FilePath: /egg_temp/database/migrations/20201210125716-init-drug.js
 */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, UUID, UUIDV4, DOUBLE } = Sequelize;
    await queryInterface.createTable('drugs', {
      id: { type: UUID, primaryKey: true, defaultValue: UUIDV4 },
      name: STRING,
      number: INTEGER,
      cost: DOUBLE,
      sale: DOUBLE,
      type: STRING,
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('drugs');

  }
};
