/*
 * @Date: 2020-12-11 06:40:23
 * @LastEditors: yetm
 * @LastEditTime: 2020-12-11 06:41:42
 * @FilePath: /egg_temp/app/model/drug.js
 */
'use strict';

module.exports = app => {
    const { INTEGER, DATE, STRING, UUID, UUIDV4, DOUBLE } = app.Sequelize;

    const Drug = app.model.define('drug', {
        id: { type: UUID, primaryKey: true, defaultValue: UUIDV4 },
        name: STRING,
        number: INTEGER,
        cost: DOUBLE,
        sale: DOUBLE,
        type: STRING,
        created_at: DATE,
        updated_at: DATE,
    });
    return Drug;
};
