/**
 * All the CRUD endpoint actions together
 */

// import Database from "better-sqlite3";
import db from "../../../ormConfig.js";
const DB = await db.getRepository('products');

// Getting the Products
const getProduct = async (request, response) => {
  try {
    response.status(200).json({ Products: await DB.find() });
  } catch({ error }) {
    response.status(500);
    response.json({ error: message });
  }
};

// Creates a new Product
const addProduct = async (request, response) => {
  try {
    // let Product = {
    //   "name": "test",
    //   "email": "test@email.com"
    // }
    console.log(await request.body);
    response.status(201).json({ Product: await DB.save(request.body)})
  } catch({ message }) {
    response.status(500).json({ error: message });
  }
};


// Update a Product

const updateProduct = async (request, response) => {
  try {
    const id = request.params.id;
    response.status(200).json({ Product: await DB.update(id, request.body) });
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }
};


// Delete a Product

const deleteProduct = async (request, response) => {
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
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
}