/**
 * All the CRUD endpoint actions together
 */

// import Database from "better-sqlite3";
import db from "../../../ormConfig.js";
const DB = await db.getRepository('orders');

// Getting the Orders
const getOrder = async (request, response) => {
  try {
    response.status(200).json({ order: await DB.find() });
  } catch({ error }) {
    response.status(500);
    response.json({ error: message });
  }
};

// Creates a new Order
const addOrder = async (request, response) => {
  try {
    // let Order = {
    //   "name": "test",
    //   "email": "test@email.com"
    // }
    console.log(await request.body);
    response.status(201).json({ order: await DB.save(request.body)})
  } catch({ message }) {
    response.status(500).json({ error: message });
  }
};


// Update a Order

const updateOrder = async (request, response) => {
  try {
    const id = request.params.id;
    response.status(200).json({ order: await DB.update(id, request.body) });
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }
};


// Delete a Order

const deleteOrder = async (request, response) => {
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
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder
}