const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require("mongoose");

const Citizen = require('../models/Citizen');

passport.use(new LocalStrategy({
    usernameField: 'cedula'
  }, async (cedula, password, done) => {
    const citizen = await Citizen.findOne({id: cedula});
    if (!citizen) {
      return done(null, false, { message: 'Not Citizen found.' });
    } else {
      // Match Password's User
      const match = await citizen.matchPassword(password);
      if(match) {
        return done(null, citizen);
      } else {
        return done(null, false, { message: 'Incorrect Password.' });
      }
    }
  }));
  
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Citizen.findById(mongoose.Types.ObjectId(id), (err, user) => {
        done(err, user);
    });
});