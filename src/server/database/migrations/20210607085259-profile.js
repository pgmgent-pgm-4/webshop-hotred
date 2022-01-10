import 'babel-polyfill';

import database from '../index';

database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.profiles.tableName, database.profiles.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.profiles.tableName);
  },
};
