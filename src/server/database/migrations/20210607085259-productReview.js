import 'babel-polyfill';

import database from '../index';

database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.product_reviews.tableName, database.product_reviews.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.product_reviews.tableName);
  },
};
