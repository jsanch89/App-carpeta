const { Schema, model } = require("mongoose");


const CitizenSchema = new Schema({
  id: { type: Number, required: true, unique: true  },
  name: { type: String },
  address: { type: String },
  email: { type: String },
  password: { type: String, required: true },
  operatorID: { type: Number },
  operatorName: { type: String },
});

CitizenSchema.methods.matchPassword = async function (password) {
  return await password === this.password;
};

module.exports = model("Citizen", CitizenSchema);