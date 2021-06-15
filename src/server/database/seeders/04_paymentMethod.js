// import/no-extraneous-dependencies
import 'babel-polyfill';
import faker from 'faker';

import { generateValueBetweenMinAndMax } from '../../utils';
import database from '../index';
database.connect();

const getPaymentMethod = (n = 20) => {
  const paymentMethods = [];
  for (let i = 0; i < n; i++) {
    paymentMethods.push({
      name: faker.company.companyName(),
			createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return paymentMethods;
};

export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			database.payment_methods.tableName,
			getPaymentMethod(4),
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(database.payment_methods.tableName, null, {});
	},
};
