
const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports=mongoose.model('users',userModel)