import 'babel-polyfill';

import database from '../index';

database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.products.tableName, database.products.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.products.tableName);
  },
};
