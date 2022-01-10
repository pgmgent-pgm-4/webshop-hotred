// import/no-extraneous-dependencies
import 'babel-polyfill';
import faker from 'faker';

import { generateValueBetweenMinAndMax } from '../../utils';
import database from '../index';
database.connect();

const getPayments = (n = 20) => {
  const payments = [];
  for (let i = 0; i < n; i++) {
    payments.push({
      card_number: faker.finance.creditCardNumber(),
			card_exp_date: "17 June 2021",
			payment_date: "16 June 2021",
      createdAt: new Date(),
      updatedAt: new Date(),
			payment_methods_id: Math.round(Math.random() * 5 + 1)
    });
  }
  return payments;
};

export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			database.payments.tableName,
			getPayments(80),
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(database.payments.tableName, null, {});
	},
};
