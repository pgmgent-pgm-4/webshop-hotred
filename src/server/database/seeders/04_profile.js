// import/no-extraneous-dependencies
import 'babel-polyfill';
import faker from 'faker';

import { generateValueBetweenMinAndMax } from '../../utils';
import database from '../index';
database.connect();

const getProfiles = (n = 20) => {
  const profiles = [];
  for (let i = 0; i < n; i++) {
    profiles.push({
      firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			email: faker.internet.email(),
			phone: faker.phone.phoneNumber("+324 ## ## ## ##"),
			username: faker.internet.userName(),
			password: faker.internet.password(),
			street: faker.address.streetAddress(),
			house_nr: Math.round(Math.random() * 50 + 1),
      createdAt: new Date(),
      updatedAt: new Date(),
			city_id: Math.round(Math.random() * 50 + 1),
			country_id: Math.round(Math.random() * 50 + 1),
    });
  }
  return profiles;
};

export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			database.profiles.tableName,
			getProfiles(50),
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(database.profiles.tableName, null, {});
	},
};
