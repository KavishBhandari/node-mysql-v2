let express = require("express");

let app = express();

let router = express.Router();

let {register, login} = require("../controllers/auth.controller.js");


//register
router.post("/register", register);

//login

router.post("/login", login)

module.exports = router;