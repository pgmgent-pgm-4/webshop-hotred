import { convertArrayToPagedObject, handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/*
Get all countries
*/
const getCountries = async (req, res, next) => {
  try {
    // Get query parameters
    const { itemsPerPage, currentPage } = req.query;

    // Get countries from database
    let countries = null;
    if (itemsPerPage && currentPage) {
      countries = await database.Category.findAll({
        offset: (currentPage - 1) * itemsPerPage,
        limit: itemsPerPage,
      });
      countries = convertArrayToPagedObject(countries, itemsPerPage, currentPage, await database.countries.count());
    } else {
      countries = await database.countries.findAll();
    }

    if (!countries || countries.length === 0) {
      throw new HTTPError('Could not find countries!', 404);
    }

    // Send response
    res.status(200).json(countries);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific country
*/
const getCountryById = async (req, res, next) => {
  try {
    // Get countryId parameter
    const { countryId } = req.params;
    // Get specific country from database
    const country = await database.countries.findByPk(countryId);

    if (country === null) {
      throw new HTTPError(`Could not find the country with id ${countryId}!`, 404);
    }
    // Send response
    res.status(200).json(country);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Create a new country
*/
const createCountry = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;
    // Create a post
    const createdModel = await database.countries.create(model);
    // Send response
    res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Update an exisiting country
*/
const updateCountry = async (req, res, next) => {
  try {
    // Get countryId parameter
    const { countryId } = req.params;
    console.log(countryId);
    // Get specific country from database
    const country = await database.countries.findByPk(countryId);

    if (country === null) {
      throw new HTTPError(`Could not find the country with id ${countryId}!`, 404);
    }

    // Update a specific post
    const model = req.body;
    const updatedPost = await database.countries.update(model, {
      where: {
        id: countryId,
      },
    });

    // Send response
    res.status(200).json(updatedPost);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Delete an exisiting country
*/
const deleteCountry = async (req, res, next) => {
  try {
    // Get countryId parameter
    const { countryId } = req.params;
    // const id = req.params.id;
    console.log(countryId);
    // Get specific country from database
    const country = await database.countries.findByPk(countryId);

    console.log(country);

    if (country === null) {
      throw new HTTPError(`Could not find the country with id ${countryId}!`, 404);
    }

    // Delete a country with specified id
    const message = await database.countries.destroy({
      where: {
        id: countryId,
      },
    });

    // Send response
    res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

export {
  createCountry, deleteCountry, getCountryById, getCountries, updateCountry,
};
