const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: Number,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    // user_id: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
