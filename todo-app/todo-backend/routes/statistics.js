const express = require('express');
const router = express.Router();

const redis = require('../redis');

router.get('/', async (req, res) => {
  res.json({
    added_todos: parseInt(await redis.get("added_todos")),
  });
});

module.exports = router;
