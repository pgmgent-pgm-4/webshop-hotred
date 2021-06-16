import 'babel-polyfill';

import database from '../index';

database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.orders.tableName, database.orders.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.orders.tableName);
  },
};
