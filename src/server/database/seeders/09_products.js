// import/no-extraneous-dependencies
import 'babel-polyfill';
import faker from 'faker';

import { generateValueBetweenMinAndMax } from '../../utils';
import database from '../index';
database.connect();

const getProducts = (n = 20) => {
  const products = [];
  for (let i = 0; i < n; i++) {
    products.push({
      name: faker.commerce.productName(),
			price: Math.round(Math.random() * 500 + 1),
      createdAt: new Date(),
      updatedAt: new Date(),
			specifications_id: Math.round(Math.random() * 50 + 1),
			product_review_id: Math.round(Math.random() * 50 + 1),
    });
  }
  return products;
};

export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			database.products.tableName,
			getProducts(100),
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(database.products.tableName, null, {});
	},
};
