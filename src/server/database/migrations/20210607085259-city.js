import 'babel-polyfill';

import database from '../index';

database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.cities.tableName, database.cities.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.cities.tableName);
  },
};
