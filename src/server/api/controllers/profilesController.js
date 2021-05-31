/**
 * All the CRUD endpoint actions together
 */

// import Database from "better-sqlite3";
import db from "../../../ormConfig.js";
const DB = await db.getRepository('profiles');

// Getting the Profiles
const getProfile = async (request, response) => {
  try {
    response.status(200).json({ Profiles: await DB.find() });
  } catch({ error }) {
    response.status(500);
    response.json({ error: message });
  }
};

// Creates a new Profile
const addProfile = async (request, response) => {
  try {
    // let Profile = {
    //   "name": "test",
    //   "email": "test@email.com"
    // }
    console.log(await request.body);
    response.status(201).json({ Profile: await DB.save(request.body)})
  } catch({ message }) {
    response.status(500).json({ error: message });
  }
};


// Update a Profile

const updateProfile = async (request, response) => {
  try {
    const id = request.params.id;
    response.status(200).json({ Profile: await DB.update(id, request.body) });
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }
};


// Delete a Profile

const deleteProfile = async (request, response) => {
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
  getProfile,
  addProfile,
  updateProfile,
  deleteProfile
}