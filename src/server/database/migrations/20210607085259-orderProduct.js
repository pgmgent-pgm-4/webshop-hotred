import 'babel-polyfill';

import database from '../index';

database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.order_products.tableName, database.order_products.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.order_products.tableName);
  },
};
