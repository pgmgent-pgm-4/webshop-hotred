import { convertArrayToPagedObject, handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/*
Get all productCategories
*/
const getProductCategories = async (req, res, next) => {
  try {
    // Get query parameters
    const { itemsPerPage, currentPage } = req.query;

    // Get productCategories from database
    let productCategories = null;
    if (itemsPerPage && currentPage) {
      productCategories = await database.Category.findAll({
        offset: (currentPage - 1) * itemsPerPage,
        limit: itemsPerPage,
      });
      productCategories = convertArrayToPagedObject(productCategories, itemsPerPage, currentPage, await database.product_categories.count());
    } else {
      productCategories = await database.product_categories.findAll();
    }

    if (!productCategories || productCategories.length === 0) {
      throw new HTTPError('Could not find productCategories!', 404);
    }

    // Send response
    res.status(200).json(productCategories);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific productCategory
*/
const getProductCategoryById = async (req, res, next) => {
  try {
    // Get productCategoryId parameter
    const { productCategoryId } = req.params;
    // Get specific productCategory from database
    const productCategory = await database.product_categories.findByPk(productCategoryId);

    if (productCategory === null) {
      throw new HTTPError(`Could not find the productCategory with id ${productCategoryId}!`, 404);
    }
    // Send response
    res.status(200).json(productCategory);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Create a new productCategory
*/
const createProductCategory = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;
    // Create a post
    const createdModel = await database.product_categories.create(model);
    // Send response
    res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Update an exisiting productCategory
*/
const updateProductCategory = async (req, res, next) => {
  try {
    // Get productCategoryId parameter
    const { productCategoryId } = req.params;
    // Get specific productCategory from database
    const productCategory = await database.product_categories.findByPk(productCategoryId);

    if (productCategory === null) {
      throw new HTTPError(`Could not find the productCategory with id ${productCategoryId}!`, 404);
    }

    // Update a specific post
    const model = req.body;
    const updatedPost = await database.product_categories.update(model, {
      where: {
        id: productCategoryId,
      },
    });

    // Send response
    res.status(200).json(updatedPost);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Delete an exisiting productCategory
*/
const deleteProductCategory = async (req, res, next) => {
  try {
    // Get productCategoryId parameter
    const { productCategoryId } = req.params;
    // Get specific productCategory from database
    const productCategory = await database.product_categories.findByPk(productCategoryId);

    console.log(productCategory);

    if (productCategory === null) {
      throw new HTTPError(`Could not find the productCategory with id ${productCategoryId}!`, 404);
    }

    // Delete a productCategory with specified id
    const message = await database.product_categories.destroy({
      where: {
        id: productCategoryId,
      },
    });

    // Send response
    res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

export {
  createProductCategory, deleteProductCategory, getProductCategoryById, getProductCategories, updateProductCategory,
};
