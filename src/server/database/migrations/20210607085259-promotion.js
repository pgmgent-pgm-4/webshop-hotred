import 'babel-polyfill';

import database from '../index';

database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.promotions.tableName, database.promotions.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.promotions.tableName);
  },
};
