import 'babel-polyfill';

import database from '../index';

database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.countries.tableName, database.countries.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.countries.tableName);
  },
};
