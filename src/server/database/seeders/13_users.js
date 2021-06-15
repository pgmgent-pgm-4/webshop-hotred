// import/no-extraneous-dependencies
import 'babel-polyfill';
import faker from 'faker';

import { generateValueBetweenMinAndMax } from '../../utils';
import database from '../index';
database.connect();

const getUsers = (n = 20) => {
  const users = [];
  for (let i = 0; i < n; i++) {
    users.push({
			profile_id: Math.round(Math.random() * 40 + 1),
			order_id: Math.round(Math.random() * 50 + 1),
			payment_id: Math.round(Math.random() * 80 + 1),
			product_review_id: Math.round(Math.random() * 80 + 1),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return users;
};

export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			database.users.tableName,
			getUsers(40),
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(database.users.tableName, null, {});
	},
};
