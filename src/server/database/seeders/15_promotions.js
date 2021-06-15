// import/no-extraneous-dependencies
import 'babel-polyfill';
import faker from 'faker';

import { generateValueBetweenMinAndMax } from '../../utils';
import database from '../index';
database.connect();

const getOrderProductHasProducts = (n = 20) => {
  const orderProductHasProducts = [];
  for (let i = 0; i < n; i++) {
    orderProductHasProducts.push({
			products_id: Math.round(Math.random() * 100 + 1),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return orderProductHasProducts;
};

export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			database.order_products_has_products.tableName,
			getOrderProductHasProducts(50),
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(database.order_products_has_products.tableName, null, {});
	},
};
