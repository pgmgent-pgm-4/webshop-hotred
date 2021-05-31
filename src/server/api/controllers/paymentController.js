/**
 * All the CRUD endpoint actions together
 */

// import Database from "better-sqlite3";
import db from "../../../ormConfig.js";
const DB = await db.getRepository('payments');

// Getting the Payments
const getPayment = async (request, response) => {
  try {
    response.status(200).json({ Payments: await DB.find() });
  } catch({ error }) {
    response.status(500);
    response.json({ error: message });
  }
};

// Creates a new Payment
const addPayment = async (request, response) => {
  try {
    // let Payment = {
    //   "name": "test",
    //   "email": "test@email.com"
    // }
    console.log(await request.body);
    response.status(201).json({ Payment: await DB.save(request.body)})
  } catch({ message }) {
    response.status(500).json({ error: message });
  }
};


// Update a Payment

const updatePayment = async (request, response) => {
  try {
    const id = request.params.id;
    response.status(200).json({ Payment: await DB.update(id, request.body) });
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }
};


// Delete a Payment

const deletePayment = async (request, response) => {
  try {
    const id = request.params.id;
    await DB.delete(id);
    response.status(204).end();
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }
};

export default {
  getPayment,
  addPayment,
  updatePayment,
  deletePayment
}