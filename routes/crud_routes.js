let express = require("express");

let router = express.Router();

let {postcontroller, getcontroller, getbyidcontroller, patchcontroller, deletecontroller} = require("../controllers/crud_controller.js");

let app = express();

router.post("/post", postcontroller);

router.get("/", getcontroller);

router.get("/:id", getbyidcontroller);

router.patch("/:id", patchcontroller);

router.delete("/:id", deletecontroller);


module.exports = router;


