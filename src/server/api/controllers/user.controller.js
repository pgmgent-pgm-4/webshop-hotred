import { convertArrayToPagedObject, handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/*
Get all users
*/
const getUsers = async (req, res, next) => {
  try {
    // Get query parameters
    const { itemsPerPage, currentPage } = req.query;

    // Get users from database
    let users = null;
    if (itemsPerPage && currentPage) {
      users = await database.Category.findAll({
        offset: (currentPage - 1) * itemsPerPage,
        limit: itemsPerPage,
      });
      users = convertArrayToPagedObject(users, itemsPerPage, currentPage, await database.users.count());
    } else {
      users = await database.users.findAll();
    }

    if (!users || users.length === 0) {
      throw new HTTPError('Could not find users!', 404);
    }

    // Send response
    res.status(200).json(users);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific user
*/
const getUserById = async (req, res, next) => {
  try {
    // Get userId parameter
    const { userId } = req.params;
    // Get specific user from database
    const user = await database.users.findByPk(userId);

    if (user === null) {
      throw new HTTPError(`Could not find the user with id ${userId}!`, 404);
    }
    // Send response
    res.status(200).json(user);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Create a new user
*/
const createUser = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;
    // Create a post
    const createdModel = await database.users.create(model);
    // Send response
    res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Update an exisiting user
*/
const updateUser = async (req, res, next) => {
  try {
    // Get userId parameter
    const { userId } = req.params;
    // Get specific user from database
    const user = await database.users.findByPk(userId);

    if (user === null) {
      throw new HTTPError(`Could not find the user with id ${userId}!`, 404);
    }

    // Update a specific post
    const model = req.body;
    const updatedPost = await database.users.update(model, {
      where: {
        id: userId,
      },
    });

    // Send response
    res.status(200).json(updatedPost);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Delete an exisiting user
*/
const deleteUser = async (req, res, next) => {
  try {
    // Get userId parameter
    const { userId } = req.params;
    // Get specific user from database
    const user = await database.users.findByPk(userId);

    console.log(user);

    if (user === null) {
      throw new HTTPError(`Could not find the user with id ${userId}!`, 404);
    }

    // Delete a user with specified id
    const message = await database.users.destroy({
      where: {
        id: userId,
      },
    });

    // Send response
    res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

export {
  createUser, deleteUser, getUserById, getUsers, updateUser,
};
