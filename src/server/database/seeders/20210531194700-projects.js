// import/no-extraneous-dependencies
import 'babel-polyfill';
import faker from 'faker';
import fetch from 'node-fetch';

import { generateValueBetweenMinAndMax } from '../../utils';
import database from '../index';
database.connect();

const GDMGENT_API_CASES = 'https://www.gdm.gent/static/data/cases.json';

const getProjects = async () => {
  const response = await fetch(`${GDMGENT_API_CASES}`);
  const jsonData = await response.json();

  return jsonData.map(project => {
    return {
      title: project.Title,
      description: project.Description,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  });
};

export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			database.Project.tableName,
			await getProjects(),
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(database.Project.tableName, null, {});
	},
};
