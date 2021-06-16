// import/no-extraneous-dependencies
import 'babel-polyfill';
import faker from 'faker';

import { generateValueBetweenMinAndMax } from '../../utils';
import database from '../index';
database.connect();

const getCategories = (n = 20) => {
  const categories = [];
  for (let i = 0; i < n; i++) {
    categories.push({
			// replace with name in database
      name: faker.commerce.productAdjective(), 
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return categories;
};

export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			database.categories.tableName,
			getCategories(10),
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(database.categories.tableName, null, {});
	},
};
