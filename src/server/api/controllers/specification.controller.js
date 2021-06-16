import { convertArrayToPagedObject, handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/*
Get all specifications
*/
const getSpecifications = async (req, res, next) => {
  try {
    // Get query parameters
    const { itemsPerPage, currentPage } = req.query;

    // Get specifications from database
    let specifications = null;
    if (itemsPerPage && currentPage) {
      specifications = await database.Category.findAll({
        offset: (currentPage - 1) * itemsPerPage,
        limit: itemsPerPage,
      });
      specifications = convertArrayToPagedObject(specifications, itemsPerPage, currentPage, await database.specifications.count());
    } else {
      specifications = await database.specifications.findAll();
    }

    if (!specifications || specifications.length === 0) {
      throw new HTTPError('Could not find specifications!', 404);
    }

    // Send response
    res.status(200).json(specifications);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific specification
*/
const getSpecificationById = async (req, res, next) => {
  try {
    // Get specificationId parameter
    const { specificationId } = req.params;
    // Get specific specification from database
    const specification = await database.specifications.findByPk(specificationId);

    if (specification === null) {
      throw new HTTPError(`Could not find the specification with id ${specificationId}!`, 404);
    }
    // Send response
    res.status(200).json(specification);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Create a new specification
*/
const createSpecification = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;
    // Create a post
    const createdModel = await database.specifications.create(model);
    // Send response
    res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Update an exisiting specification
*/
const updateSpecification = async (req, res, next) => {
  try {
    // Get specificationId parameter
    const { specificationId } = req.params;
    // Get specific specification from database
    const specification = await database.specifications.findByPk(specificationId);

    if (specification === null) {
      throw new HTTPError(`Could not find the specification with id ${specificationId}!`, 404);
    }

    // Update a specific post
    const model = req.body;
    const updatedPost = await database.specifications.update(model, {
      where: {
        id: specificationId,
      },
    });

    // Send response
    res.status(200).json(updatedPost);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Delete an exisiting specification
*/
const deleteSpecification = async (req, res, next) => {
  try {
    // Get specificationId parameter
    const { specificationId } = req.params;
    // Get specific specification from database
    const specification = await database.specifications.findByPk(specificationId);

    console.log(specification);

    if (specification === null) {
      throw new HTTPError(`Could not find the specification with id ${specificationId}!`, 404);
    }

    // Delete a specification with specified id
    const message = await database.specifications.destroy({
      where: {
        id: specificationId,
      },
    });

    // Send response
    res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

export {
  createSpecification, deleteSpecification, getSpecificationById, getSpecifications, updateSpecification,
};
