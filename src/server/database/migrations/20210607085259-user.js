import 'babel-polyfill';

import database from '../index';

database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.users.tableName, database.users.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.users.tableName);
  },
};
