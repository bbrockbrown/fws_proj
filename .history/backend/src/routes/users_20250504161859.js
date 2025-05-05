const express = require("express");
const router = express.Router();
const db = require("../../db/schema");

router.get("/", async (req, res, next) => {
  try {
    const result = await db.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;