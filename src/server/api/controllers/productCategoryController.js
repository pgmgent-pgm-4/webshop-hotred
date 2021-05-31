/**
 * All the CRUD endpoint actions together
 */

// import Database from "better-sqlite3";
import db from "../../../ormConfig.js";
const DB = await db.getRepository('products_has_categories');

// Getting the ProductCategorys
const getProductCategory = async (request, response) => {
  try {
    response.status(200).json({ ProductCategory: await DB.find() });
  } catch({ error }) {
    response.status(500);
    response.json({ error: message });
  }
};

// Creates a new ProductCategory
const addProductCategory = async (request, response) => {
  try {
    // let ProductCategory = {
    //   "name": "test",
    //   "email": "test@email.com"
    // }
    console.log(await request.body);
    response.status(201).json({ ProductCategory: await DB.save(request.body)})
  } catch({ message }) {
    response.status(500).json({ error: message });
  }
};


// Update a ProductCategory

const updateProductCategory = async (request, response) => {
  try {
    const id = request.params.id;
    response.status(200).json({ ProductCategory: await DB.update(id, request.body) });
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }
};


// Delete a ProductCategory

const deleteProductCategory = async (request, response) => {
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
  getProductCategory,
  addProductCategory,
  updateProductCategory,
  deleteProductCategory
}