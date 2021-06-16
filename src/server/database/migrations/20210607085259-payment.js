import 'babel-polyfill';

import database from '../index';

database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.payments.tableName, database.payments.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.payments.tableName);
  },
};
