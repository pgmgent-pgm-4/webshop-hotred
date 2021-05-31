/**
 * All the CRUD endpoint actions together
 */

// import Database from "better-sqlite3";
import db from "../../../ormConfig.js";
const DB = await db.getRepository('order_products');

const getOrderProduct = async (request, response) => {
  try {
    response.status(200).json({ orderProducts: await DB.find() });
  } catch({ error }) {
    response.status(500);
    response.json({ error: message });
  }
};

const addOrderProduct = async (request, response) => {
  try {
    console.log(await request.body);
    response.status(201).json({ orderProducts: await DB.save(request.body)})
  } catch({ message }) {
    response.status(500).json({ error: message });
  }
};


const updateOrderProduct = async (request, response) => {
  try {
    const id = request.params.id;
    response.status(200).json({ orderProducts: await DB.update(id, request.body) });
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }
};


const deleteOrderProduct = async (request, response) => {
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
  getOrderProduct,
  addOrderProduct,
  updateOrderProduct,
  deleteOrderProduct
}