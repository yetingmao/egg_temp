'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     const { INTEGER, DATE, STRING,UUIDV4 } = Sequelize;
    await queryInterface.createTable('datas', {
      id: { type: INTEGER, primaryKey: true,  defaultValue: UUIDV4 },
      image: STRING,
      status: STRING,
      model:STRING,
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
