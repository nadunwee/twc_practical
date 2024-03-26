const Contact = require("../models/contactModel.jsx");
const mongoose = require("mongoose");

// GET all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET a contact

// POST a new contact
const createContact = async (req, res) => {
  const { name, email, phoneNumber } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push(name);
  }
  if (!email) {
    emptyFields.push(email);
  }
  if (!phoneNumber) {
    emptyFields.push(phoneNumber);
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "please fill the all the fields", emptyFields });
  }

  try {
    const contact = await Contact.create({ name, email, phoneNumber });
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELTE a contact

// UPDATE a contact

module.exports = { getContacts, createContact };
