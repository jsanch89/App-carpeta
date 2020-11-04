const citizensCtrl = {};
const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');
// Models
const Citizen = require('../models/Citizen');

// Modules
const passport = require("passport");

citizensCtrl.singup = async (req, res) => {
  let errors = [];
  const { id, name, address, email, password, confirm_password } = req.body;
  if (password != confirm_password) {
    errors.push({ text: "Passwords do not match." });
  }
  if (errors.length > 0) {
    /*res.render("users/signup", {
      errors,
      name,
      email,
      password,
      confirm_password
    });*/
    res.status(501).send(errors);
  } else {
    // Look for email coincidence
    const cedulaCitizen = await Citizen.findOne({ id: id });
    if (cedulaCitizen) {
      /*req.flash("error_msg", "The Email is already in use.");
      res.redirect("/users/signup");*/
      res.status(501).send(`El ciudadano con cédula ${id} ya se encuentra registrado en este operador.`);
    } else {
      // Saving a New Citizen
      //TODO change hardcoded data
      const operatorID = 10;
      const operatorName = "MyOperator"
      const newCitizen = new Citizen({ id, name, address, email, password, operatorID, operatorName });
      const body = {
        "id": id,
        "name": name,
        "address": address,
        "email": email,
        "operatorId": operatorID,
        "operatorName": operatorName
      };

      console.log(body);
      const response = await fetch('http://govCarpetaApp.mybluemix.net/apis/registerCitizen', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })
      console.log(response);
      if (response.status === 201) {
        res.status(201).send(`Ciudadano con id: ${id} relacionado con Operador: ${operatorName} creado exitosamente.`);
        await newCitizen.save();
      } else {
        res.status(501).send(`Error al crear Ciudadano con id: ${id} ya se encuentra registrado en la carpeta ciudadana.`);
      }
    }
  }
};

citizensCtrl.signin = async (req, res, next) => {
  passport.authenticate(
    'login',
    async (err, citizen, info) => {
      try {
        console.log(err);
        if (err || !citizen) {
          const error = new Error('An error occurred.');
          return next(error);
        }
        req.login(
          citizen,
          { session: false },
          async (error) => {
            if (error) return next(error);
            const body = { _id: citizen._id, cedula: citizen.cedula };
            const token = jwt.sign({ citizen: body }, 'TOP_SECRET');
            return res.json({ token });
          }
        );
      } catch (error) {
        return next(error);
      }
    }
  )(req, res, next);
};

module.exports = citizensCtrl;