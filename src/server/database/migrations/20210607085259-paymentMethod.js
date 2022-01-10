import 'babel-polyfill';

import database from '../index';

database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(database.payment_methods.tableName, database.payment_methods.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(database.payment_methods.tableName);
  },
};
