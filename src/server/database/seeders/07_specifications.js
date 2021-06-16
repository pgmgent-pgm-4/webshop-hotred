// import/no-extraneous-dependencies
import 'babel-polyfill';
import faker from 'faker';

import { generateValueBetweenMinAndMax } from '../../utils';
import database from '../index';
database.connect();

const getSpecifications = (n = 20) => {
  const specifications = [];
  for (let i = 0; i < n; i++) {
    specifications.push({
      height: faker.finance.creditCardNumber(),
			height: Math.round(Math.random() * 200 + 1),
			width: Math.round(Math.random() * 160 + 1),
			weight: Math.round(Math.random() * 700 + 1),
			ram: Math.round(Math.random() * 16 + 1),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return specifications;
};

export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			database.specifications.tableName,
			getSpecifications(50),
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(database.specifications.tableName, null, {});
	},
};
