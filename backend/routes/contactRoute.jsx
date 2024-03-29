const express = require("express");

const {
  getContacts,
  createContact,
  deleteContact,
  updateContact,
} = require("../controllers/contactController.jsx");

const requireAuth = require("../middleware/requireAuth.jsx");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// GET all contacts
router.get("/contacts", getContacts);

// GET a contact

// POST a new contact
router.post("/contact/new", createContact);

// DELTE a contact
router.delete("/:id", deleteContact);

// UPDATE a contact
router.patch("/:id", updateContact);

module.exports = router;
