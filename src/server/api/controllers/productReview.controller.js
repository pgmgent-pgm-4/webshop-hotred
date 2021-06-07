import { convertArrayToPagedObject, handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/*
Get all productReviews
*/
const getProductReviews = async (req, res, next) => {
  try {
    // Get query parameters
    const { itemsPerPage, currentPage } = req.query;

    // Get productReviews from database
    let productReviews = null;
    if (itemsPerPage && currentPage) {
      productReviews = await database.Category.findAll({
        offset: (currentPage - 1) * itemsPerPage,
        limit: itemsPerPage,
      });
      productReviews = convertArrayToPagedObject(productReviews, itemsPerPage, currentPage, await database.product_reviews.count());
    } else {
      productReviews = await database.product_reviews.findAll();
    }

    if (!productReviews || productReviews.length === 0) {
      throw new HTTPError('Could not find productReviews!', 404);
    }

    // Send response
    res.status(200).json(productReviews);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific productReview
*/
const getProductReviewById = async (req, res, next) => {
  try {
    // Get productReviewId parameter
    const { productReviewId } = req.params;
    // Get specific productReview from database
    const productReview = await database.product_reviews.findByPk(productReviewId);

    if (productReview === null) {
      throw new HTTPError(`Could not find the productReview with id ${productReviewId}!`, 404);
    }
    // Send response
    res.status(200).json(productReview);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Create a new productReview
*/
const createProductReview = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;
    // Create a post
    const createdModel = await database.product_reviews.create(model);
    // Send response
    res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Update an exisiting productReview
*/
const updateProductReview = async (req, res, next) => {
  try {
    // Get productReviewId parameter
    const { productReviewId } = req.params;
    // Get specific productReview from database
    const productReview = await database.product_reviews.findByPk(productReviewId);

    if (productReview === null) {
      throw new HTTPError(`Could not find the productReview with id ${productReviewId}!`, 404);
    }

    // Update a specific post
    const model = req.body;
    const updatedPost = await database.product_reviews.update(model, {
      where: {
        id: productReviewId,
      },
    });

    // Send response
    res.status(200).json(updatedPost);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Delete an exisiting productReview
*/
const deleteProductReview = async (req, res, next) => {
  try {
    // Get productReviewId parameter
    const { productReviewId } = req.params;
    // Get specific productReview from database
    const productReview = await database.product_reviews.findByPk(productReviewId);

    console.log(productReview);

    if (productReview === null) {
      throw new HTTPError(`Could not find the productReview with id ${productReviewId}!`, 404);
    }

    // Delete a productReview with specified id
    const message = await database.product_reviews.destroy({
      where: {
        id: productReviewId,
      },
    });

    // Send response
    res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

export {
  createProductReview, deleteProductReview, getProductReviewById, getProductReviews, updateProductReview,
};
