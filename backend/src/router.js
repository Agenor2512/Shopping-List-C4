const express = require("express");

const router = express.Router();

const ingredientControllers = require("./controllers/ingredientControllers");

router.get("/ingredients", ingredientControllers.search);
router.post("/ingredients", ingredientControllers.add);

module.exports = router;
