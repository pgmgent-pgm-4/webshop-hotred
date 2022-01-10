// import/no-extraneous-dependencies
import 'babel-polyfill';
import faker from 'faker';

import { generateValueBetweenMinAndMax } from '../../utils';
import database from '../index';
database.connect();

const getProductReview = (n = 20) => {
  const productReview = [];
  for (let i = 0; i < n; i++) {
    productReview.push({
			subject: faker.lorem.lines(),
			review: faker.lorem.paragraph(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return productReview;
};

export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			database.product_reviews.tableName,
			getProductReview(80),
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(database.product_reviews.tableName, null, {});
	},
};
