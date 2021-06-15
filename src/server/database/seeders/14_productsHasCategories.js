// import/no-extraneous-dependencies
import 'babel-polyfill';
import faker from 'faker';

import { generateValueBetweenMinAndMax } from '../../utils';
import database from '../index';
database.connect();

const getProductsHasCategories = (n = 20) => {
  const productsHasCategories = [];
  for (let i = 0; i < n; i++) {
    productsHasCategories.push({
			categories_id: Math.round(Math.random() * 10 + 1),
			products_id: Math.round(Math.random() * 100 + 1),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return productsHasCategories;
};

export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			database.products_has_categories.tableName,
			getProductsHasCategories(50),
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(database.products_has_categories.tableName, null, {});
	},
};
