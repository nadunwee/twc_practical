const express = require("express");

const {
  getContacts,
  createContact,
} = require("../controllers/contactController.jsx");

const router = express.Router();

// GET all contacts
router.get("/contacts", getContacts);

// GET a contact

// POST a new contact
router.post("/contact/new", createContact);
// DELTE a contact

// UPDATE a contact

module.exports = router;
