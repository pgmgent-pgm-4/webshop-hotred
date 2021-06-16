import 'babel-polyfill';

import database from '../index';

database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.specifications.tableName, database.specifications.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.specifications.tableName);
  },
};
