const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// Connect DB
mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));

app.set('port', process.env.PORT || 5000);

// Middleware
app.use(express.json());
app.use(cors());
// Route
app.use('/document', require('./routes/document'))

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
