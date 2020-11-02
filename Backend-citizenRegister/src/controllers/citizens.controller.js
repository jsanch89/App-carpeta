const citizensCtrl = {};
const fetch = require('node-fetch'); 
// Models
const Citizen = require('../models/Citizen');

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
      res.send("501", errors);
    } else {
      // Look for email coincidence
      const cedulaCitizen = await Citizen.findOne({ id: id });
      if (cedulaCitizen) {
        /*req.flash("error_msg", "The Email is already in use.");
        res.redirect("/users/signup");*/
        res.send("501", `El ciudadano con cédula ${id} ya se encuentra registrado en este operador.`);
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
        const response = await fetch('http://govCarpetaApp.mybluemix.net/apis/registerCitizen', {
            method: 'post',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
        if(response.status === 201){
            res.send("201", `Ciudadano con id: ${id} relacionado con Operador: ${operatorName} creado exitosamente.`);
            await newCitizen.save();
        } else {
            res.send("501", `Error al crear Ciudadano con id: ${id} ya se encuentra registrado en la carpeta ciudadana.`);
        }
      }
    }
};

module.exports = citizensCtrl;