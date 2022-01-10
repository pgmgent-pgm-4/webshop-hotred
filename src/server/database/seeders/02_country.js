// import/no-extraneous-dependencies
import 'babel-polyfill';
import faker from 'faker';

import { generateValueBetweenMinAndMax } from '../../utils';
import database from '../index';
database.connect();

const getCountries = (n = 20) => {
  const countries = [];
  for (let i = 0; i < n; i++) {
    countries.push({
      name: faker.address.country(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return countries;
};

export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			database.countries.tableName,
			getCountries(50),
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(database.countries.tableName, null, {});
	},
};
