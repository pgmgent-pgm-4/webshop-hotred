/**
 * All the CRUD endpoint actions together
 */

// import Database from "better-sqlite3";
import db from "../../../ormConfig.js";
const DB = await db.getRepository('product_reviews');

// Getting the ProductReviews
const getProductReview = async (request, response) => {
  try {
    response.status(200).json({ ProductReview: await DB.find() });
  } catch({ error }) {
    response.status(500);
    response.json({ error: message });
  }
};

// Creates a new ProductReview
const addProductReview = async (request, response) => {
  try {
    // let ProductReview = {
    //   "name": "test",
    //   "email": "test@email.com"
    // }
    console.log(await request.body);
    response.status(201).json({ ProductReview: await DB.save(request.body)})
  } catch({ message }) {
    response.status(500).json({ error: message });
  }
};


// Update a ProductReview

const updateProductReview = async (request, response) => {
  try {
    const id = request.params.id;
    response.status(200).json({ ProductReview: await DB.update(id, request.body) });
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }
};


// Delete a ProductReview

const deleteProductReview = async (request, response) => {
  try {
    const id = request.params.id;
    DB.delete(id);
    response.status(204).end();
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }
};

export default {
  getProductReview,
  addProductReview,
  updateProductReview,
  deleteProductReview
}