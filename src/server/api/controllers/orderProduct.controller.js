import { convertArrayToPagedObject, handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/*
Get all orderProducts
*/
const getOrderProducts = async (req, res, next) => {
  try {
    // Get query parameters
    const { itemsPerPage, currentPage } = req.query;

    // Get orderProducts from database
    let orderProducts = null;
    if (itemsPerPage && currentPage) {
      orderProducts = await database.Category.findAll({
        offset: (currentPage - 1) * itemsPerPage,
        limit: itemsPerPage,
      });
      orderProducts = convertArrayToPagedObject(orderProducts, itemsPerPage, currentPage, await database.order_products.count());
    } else {
      orderProducts = await database.order_products.findAll();
    }

    if (!orderProducts || orderProducts.length === 0) {
      throw new HTTPError('Could not find orderProducts!', 404);
    }

    // Send response
    res.status(200).json(orderProducts);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific orderProduct
*/
const getOrderProductById = async (req, res, next) => {
  try {
    // Get orderProductId parameter
    const { orderProductId } = req.params;
    // Get specific orderProduct from database
    const orderProduct = await database.order_products.findByPk(orderProductId);

    if (orderProduct === null) {
      throw new HTTPError(`Could not find the orderProduct with id ${orderProductId}!`, 404);
    }
    // Send response
    res.status(200).json(orderProduct);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Create a new orderProduct
*/
const createOrderProduct = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;
    // Create a post
    const createdModel = await database.order_products.create(model);
    // Send response
    res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Update an exisiting orderProduct
*/
const updateOrderProduct = async (req, res, next) => {
  try {
    // Get orderProductId parameter
    const { orderProductId } = req.params;
    console.log(orderProductId);
    // Get specific orderProduct from database
    const orderProduct = await database.order_products.findByPk(orderProductId);

    if (orderProduct === null) {
      throw new HTTPError(`Could not find the orderProduct with id ${orderProductId}!`, 404);
    }

    // Update a specific post
    const model = req.body;
    const updatedPost = await database.order_products.update(model, {
      where: {
        id: orderProductId,
      },
    });

    // Send response
    res.status(200).json(updatedPost);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Delete an exisiting orderProduct
*/
const deleteOrderProduct = async (req, res, next) => {
  try {
    // Get orderProductId parameter
    const { orderProductId } = req.params;
    // const id = req.params.id;
    console.log(orderProductId);
    // Get specific orderProduct from database
    const orderProduct = await database.order_products.findByPk(orderProductId);

    console.log(orderProduct);

    if (orderProduct === null) {
      throw new HTTPError(`Could not find the orderProduct with id ${orderProductId}!`, 404);
    }

    // Delete a orderProduct with specified id
    const message = await database.order_products.destroy({
      where: {
        id: orderProductId,
      },
    });

    // Send response
    res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

export {
  createOrderProduct, deleteOrderProduct, getOrderProductById, getOrderProducts, updateOrderProduct,
};
