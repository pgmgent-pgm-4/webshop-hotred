import { convertArrayToPagedObject, handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/*
Get all cities
*/
const getCities = async (req, res, next) => {
  try {
    // Get query parameters
    const { itemsPerPage, currentPage } = req.query;

    // Get cities from database
    let cities = null;
    if (itemsPerPage && currentPage) {
      cities = await database.cities.findAll({
        offset: (currentPage - 1) * itemsPerPage,
        limit: itemsPerPage,
      });
      cities = convertArrayToPagedObject(cities, itemsPerPage, currentPage, await database.cities.count());
    } else {
      cities = await database.cities.findAll();
    }

    if (!cities || cities.length === 0) {
      throw new HTTPError('Could not find cities!', 404);
    }

    // Send response
    res.status(200).json(cities);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific city
*/
const getCityById = async (req, res, next) => {
  try {
    // Get cityId parameter
    const { cityId } = req.params;
    // Get specific city from database
    const city = await database.cities.findByPk(cityId);

    if (city === null) {
      throw new HTTPError(`Could not find the city with id ${cityId}!`, 404);
    }
    // Send response
    res.status(200).json(city);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Create a new city
*/
const createCity = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;
    // Create a post
    const createdModel = await database.cities.create(model);
    // Send response
    res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Update an exisiting city
*/
const updateCity = async (req, res, next) => {
  try {
    // Get cityId parameter
    const { cityId } = req.params;
    console.log(cityId);
    // Get specific city from database
    const city = await database.cities.findByPk(cityId);

    if (city === null) {
      throw new HTTPError(`Could not find the city with id ${cityId}!`, 404);
    }

    // Update a specific post
    const model = req.body;
    const updatedPost = await database.cities.update(model, {
      where: {
        id: cityId,
      },
    });

    // Send response
    res.status(200).json(updatedPost);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Delete an exisiting city
*/
const deleteCity = async (req, res, next) => {
  try {
    // Get cityId parameter
    const { cityId } = req.params;
    // const id = req.params.id;
    console.log(cityId);
    // Get specific city from database
    const city = await database.cities.findByPk(cityId);

    console.log(city);

    if (city === null) {
      throw new HTTPError(`Could not find the city with id ${cityId}!`, 404);
    }

    // Delete a city with specified id
    const message = await database.cities.destroy({
      where: {
        id: cityId,
      },
    });

    // Send response
    res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

export {
  createCity, deleteCity, getCityById, getCities, updateCity,
};
