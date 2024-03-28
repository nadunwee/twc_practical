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
  const { name, email, phoneNumber, gender } = req.body;

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
  if (!gender) {
    emptyFields.push(gender);
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "please fill the all the fields", emptyFields });
  }

  try {
    // const user_id = ;
    console.log(req.user);
    const contact = await Contact.create({
      name,
      email,
      phoneNumber,
      gender,
    });
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELTE a contact
const deleteContact = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ error: "NO such a contact (mongoose ID is invalid)" });
  }

  const contact = await Contact.findOneAndDelete({ _id: id });

  if (!contact) {
    return res
      .status(400)
      .json({ error: "NO such a contact (contact ID is invalid)" });
  }

  res.status(200).json(contact);
};

// UPDATE a contact
const updateContact = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400)
      .json({ error: "NO such a contact (mongoose ID is invalid)" });
  }

  const contact = await Contact.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!contact) {
    return res
      .status(400)
      .json({ error: "NO such a contact (contact ID is invalid)" });
  }

  res.status(200).json(contact);
};

module.exports = { getContacts, createContact, deleteContact, updateContact };
