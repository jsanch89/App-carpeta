const express = require('express');
const bodyParser = require('body-parser')
const path = require("path");
//const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const morgan = require("morgan");
const connectMongo = require("connect-mongo");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require('cors');
const app = express();
require("./config/passport");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.set("port", process.env.PORT || 5000);

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
//app.use(methodOverride("_method"));
const MongoStore = connectMongo(session);
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// routes
app.use(require("./routes/citizens.routes"));

app.use((req, res) => {
  res.render("404");
});

module.exports = app;