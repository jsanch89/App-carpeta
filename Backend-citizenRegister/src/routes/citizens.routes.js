const router = require("express").Router();

const {
  //renderSignUpForm,
  singup,
  //renderSigninForm,
  //signin,
  //logout
} = require("../controllers/citizens.controller");

// Routes
//router.get("/citizens/signup", renderSignUpForm);

router.post("/citizens/signup", singup);

//router.get("/citizens/signin", renderSigninForm);

//router.post("/citizens/signin", signin);

//router.get("/citizens/logout", logout);

module.exports = router;