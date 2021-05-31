/**
 * All the CRUD endpoint actions together
 */

// import Database from "better-sqlite3";
import db from "../../../ormConfig.js";
const DB = await db.getRepository('category');

// Getting the users
const getCategory = async (request, response) => {
  try {
    response.status(200).json({ category: await DB.find() });
  } catch({ error }) {
    response.status(500);
    response.json({ error: message });
  }
};

// Creates a new user
const addCategory = async (request, response) => {
  try {
    // let user = {
    //   "name": "test",
    //   "email": "test@email.com"
    // }
    console.log(await request.body);
    response.status(201).json({ category: await DB.save(request.body)})
  } catch({ message }) {
    response.status(500).json({ error: message });
  }
};


// Update a user

const updateCategory = async (request, response) => {
  try {
    const id = request.params.id;
    response.status(200).json({ category: await DB.update(id, request.body) });
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }
};


// Delete a user

const deleteCategory = async (request, response) => {
  try {
    const id = request.params.id;
    DB.delete(id);
    response.status(204).end();
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }
}

export default {
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory
}