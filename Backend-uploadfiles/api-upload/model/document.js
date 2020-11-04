const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  cedula: { 
    type: Number,  
  },
  documentTitle: {
    type: String,
  },
  documentURL: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
});

module.exports = mongoose.model("Document", documentSchema);
