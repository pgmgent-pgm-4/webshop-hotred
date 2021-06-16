// import/no-extraneous-dependencies
import 'babel-polyfill';
import faker from 'faker';

import { generateValueBetweenMinAndMax } from '../../utils';
import database from '../index';
database.connect();

const getOrders = (n = 20) => {
  const orders = [];
  for (let i = 0; i < n; i++) {
    orders.push({
      createdAt: new Date(),
      updatedAt: new Date(),
			order_products_id: Math.round(Math.random() * 50 + 1),
			payment_id: Math.round(Math.random() * 50 + 1),
    });
  }
  return orders;
};

export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			database.orders.tableName,
			getOrders(50),
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(database.orders.tableName, null, {});
	},
};
