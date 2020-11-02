const mongoose = require("mongoose");

const connectionString="mongodb+srv://micarpeta:micarpeta12345@cluster0.qbrue.mongodb.net/Micarpeta?retryWrites=true&w=majority"
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log("Mongodb is connected to", db.connection.host))
  .catch((err) => console.error(err));