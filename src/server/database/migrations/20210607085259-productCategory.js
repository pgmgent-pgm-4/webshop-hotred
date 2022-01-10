import 'babel-polyfill';

import database from '../index';

database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.product_has_categories.tableName, database.product_has_categories.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.product_has_categories.tableName);
  },
};
