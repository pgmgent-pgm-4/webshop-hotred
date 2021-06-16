import 'babel-polyfill';

import database from '../index';

database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.categories.tableName, database.categories.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.categories.tableName);
  },
};
