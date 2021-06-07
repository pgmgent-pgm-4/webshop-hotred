// import/no-extraneous-dependencies
import 'babel-polyfill';
import faker from 'faker';

import { generateValueBetweenMinAndMax } from '../../utils';
import database from '../index';
database.connect();

const getTags = (n = 20) => {
  const tags = [];
  for (let i=0; i < n;i++) {
    tags.push({
      name: faker.lorem.word(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return tags;
};

export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			database.Tag.tableName,
			getTags(60),
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(database.Tag.tableName, null, {});
	},
};
