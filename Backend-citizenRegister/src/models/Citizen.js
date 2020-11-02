const { Schema, model } = require("mongoose");

//const bcrypt = require("bcryptjs");

const CitizenSchema = new Schema({
  id: { type: Number, required: true, unique: true  },
  name: { type: String },
  address: { type: String },
  email: { type: String },
  password: { type: String, required: true },
  operatorID: { type: Number },
  operatorName: { type: String },
});

/*UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};*/

module.exports = model("Citizen", CitizenSchema);