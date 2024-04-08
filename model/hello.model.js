const mongoose = require("mongoose");

const HelloSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [4],
    },
    age: {
      type: Number,
      required: true,
      maxLength: [2],
    },
    gender: {
      type: String,
      required: true,
      maxLength: [6],
    },
    city: {
      type: String,
      required: true,
      minLength: [4],
    },
    state: {
      type: String,
      required: true,
      minLength: [4],
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      maxLength: [10],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxLength: [30],
    },
  },
  { timestamps: true }
);

const helloModel = mongoose.model("Hello", HelloSchema);

module.exports = helloModel;
