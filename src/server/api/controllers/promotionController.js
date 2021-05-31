/**
 * All the CRUD endpoint actions together
 */

// import Database from "better-sqlite3";
import db from "../../../ormConfig.js";
const DB = await db.getRepository('promotions');

// Getting the Promotions
const getPromotion = async (request, response) => {
  try {
    response.status(200).json({ Promotions: await DB.find() });
  } catch({ error }) {
    response.status(500);
    response.json({ error: message });
  }
};

// Creates a new Promotion
const addPromotion = async (request, response) => {
  try {
    // let Promotion = {
    //   "name": "test",
    //   "email": "test@email.com"
    // }
    console.log(await request.body);
    response.status(201).json({ Promotion: await DB.save(request.body)})
  } catch({ message }) {
    response.status(500).json({ error: message });
  }
};


// Update a Promotion

const updatePromotion = async (request, response) => {
  try {
    const id = request.params.id;
    response.status(200).json({ Promotion: await DB.update(id, request.body) });
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }
};


// Delete a Promotion

const deletePromotion = async (request, response) => {
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
  getPromotion,
  addPromotion,
  updatePromotion,
  deletePromotion
}