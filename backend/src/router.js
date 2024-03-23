const express = require("express");

const router = express.Router();

const ingredientControllers = require("./controllers/ingredientControllers");

// Route to get a list of items
router.get("/ingredients", ingredientControllers.browse);

module.exports = router;
