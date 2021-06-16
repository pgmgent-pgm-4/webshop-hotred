import { convertArrayToPagedObject, handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/*
Get all order_products_has_products
*/
const getOrderProductHasProducts = async (req, res, next) => {
  try {
    // Get query parameters
    const { itemsPerPage, currentPage } = req.query;

    // Get order_products_has_products from database
    let order_products_has_products = null;
    if (itemsPerPage && currentPage) {
      order_products_has_products = await database.order_products_has_products.findAll({
        offset: (currentPage - 1) * itemsPerPage,
        limit: itemsPerPage,
      });
      order_products_has_products = convertArrayToPagedObject(order_products_has_products, itemsPerPage, currentPage, await database.order_products_has_products.count());
    } else {
      order_products_has_products = await database.order_products_has_products.findAll();
    }

    if (!order_products_has_products || order_products_has_products.length === 0) {
      throw new HTTPError('Could not find order_products_has_products!', 404);
    }

    // Send response
    res.status(200).json(order_products_has_products);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific orderProductsHasProduct
*/
const getOrderProductHasProductById = async (req, res, next) => {
  try {
    // Get orderProductHasProductId parameter
    const { orderProductHasProductId } = req.params;
    // Get specific orderProductsHasProduct from database
    const orderProductsHasProduct = await database.order_products_has_products.findByPk(orderProductHasProductId);

    if (orderProductsHasProduct === null) {
      throw new HTTPError(`Could not find the orderProductsHasProduct with id ${orderProductHasProductId}!`, 404);
    }
    // Send response
    res.status(200).json(orderProductsHasProduct);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Create a new orderProductsHasProduct
*/
const createOrderProductHasProduct = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;
    // Create a post
    const createdModel = await database.order_products_has_products.create(model);
    // Send response
    res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Update an exisiting orderProductsHasProduct
*/
const updateOrderProductHasProduct = async (req, res, next) => {
  try {
    // Get orderProductHasProductId parameter
    const { orderProductHasProductId } = req.params;
    console.log(orderProductHasProductId);
    // Get specific orderProductsHasProduct from database
    const orderProductsHasProduct = await database.order_products_has_products.findByPk(orderProductHasProductId);

    if (orderProductsHasProduct === null) {
      throw new HTTPError(`Could not find the orderProductsHasProduct with id ${orderProductHasProductId}!`, 404);
    }

    // Update a specific post
    const model = req.body;
    const updatedPost = await database.order_products_has_products.update(model, {
      where: {
        id: orderProductHasProductId,
      },
    });

    // Send response
    res.status(200).json(updatedPost);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Delete an exisiting orderProductsHasProduct
*/
const deleteOrderProductHasProduct = async (req, res, next) => {
  try {
    // Get orderProductHasProductId parameter
    const { orderProductHasProductId } = req.params;
    // const id = req.params.id;
    console.log(orderProductHasProductId);
    // Get specific orderProductsHasProduct from database
    const orderProductsHasProduct = await database.order_products_has_products.findByPk(orderProductHasProductId);

    console.log(orderProductsHasProduct);

    if (orderProductsHasProduct === null) {
      throw new HTTPError(`Could not find the orderProductsHasProduct with id ${orderProductHasProductId}!`, 404);
    }

    // Delete a orderProductsHasProduct with specified id
    const message = await database.order_products_has_products.destroy({
      where: {
        id: orderProductHasProductId,
      },
    });

    // Send response
    res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

export {
  createOrderProductHasProduct, deleteOrderProductHasProduct, getOrderProductHasProductById, getOrderProductHasProducts, updateOrderProductHasProduct,
};
