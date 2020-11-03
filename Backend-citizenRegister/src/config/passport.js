const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const Citizen = require('../models/Citizen');

passport.use(
    'login',
    new localStrategy(
      {
        usernameField: 'cedula',
        passwordField: 'password'
      },
      async (cedula, password, done) => {
        try {
            const citizen = await Citizen.findOne({id: cedula});
  
          if (!citizen) {
            return done(null, false, { message: 'Citizen not found' });
          }
          const validate = await citizen.matchPassword(password);
          if (!validate) {
            return done(null, false, { message: 'Wrong Password' });
          }
          return done(null, citizen, { message: 'Logged in Successfully' });
        } catch (error) {
          return done(error);
        }
      }
    )
);