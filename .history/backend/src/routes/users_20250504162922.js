const express = require("express");
const router = express.Router();
const { getAllUsers, createUser, deleteUser, updateUser } = require("../controllers/users");

router.get("/", getAllUsers);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;