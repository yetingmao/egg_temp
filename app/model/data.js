'use strict';
module.exports = app => {
  const { STRING, UUID, DATE ,UUIDV4} = app.Sequelize;

  const Data = app.model.define('datas', {
    id: { type: UUID, primaryKey: true, defaultValue: UUIDV4 },
    image: STRING,
    status: STRING,
    model:STRING,
    created_at: DATE,
    updated_at: DATE,
  });
  return Data;
};