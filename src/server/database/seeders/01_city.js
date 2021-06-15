// import/no-extraneous-dependencies
import 'babel-polyfill';
import faker from 'faker';

import { generateValueBetweenMinAndMax } from '../../utils';
import database from '../index';
database.connect();

const getCities = (n = 20) => {
  const cities = [];
  for (let i = 0; i < n; i++) {
    cities.push({
      name: faker.address.cityName(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return cities;
};

export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			database.cities.tableName,
			getCities(50),
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(database.cities.tableName, null, {});
	},
};
