const express = require("express");

const router = express.Router();
const helloController = require("../controller/hello.controller");

router.get("/", helloController.getUsers);

module.exports = router;
