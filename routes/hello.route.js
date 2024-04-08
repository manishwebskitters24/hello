const express = require("express");

const router = express.Router();
const helloController = require("../controller/hello.controller");

router.get("/", helloController.getUsers);

router.get("/:id", helloController.getUser);

router.post("/", helloController.createUser);

router.put("/:id", helloController.updateUser);

router.delete("/:id", helloController.deleteUser);

module.exports = router;
