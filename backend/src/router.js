const express = require("express");

const router = express.Router();

const ingredientControllers = require("./controllers/ingredientControllers");
const listControllers = require("./controllers/listControllers");

router.get("/ingredients", ingredientControllers.search);
router.post("/ingredients", ingredientControllers.add);

router.get("/lists/:id", listControllers.read);

module.exports = router;
