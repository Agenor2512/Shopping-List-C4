const express = require("express");

const router = express.Router();

const ingredientControllers = require("./controllers/ingredientControllers");
const listControllers = require("./controllers/listControllers");
const listHasIngredientsControllers = require("./controllers/listHasIngredientsControllers");

router.get("/ingredients", ingredientControllers.search);
router.post("/ingredients", ingredientControllers.add);

router.get("/lists/:id", listControllers.read);

router.put(
  "/list/:listId/ingredients/:ingredientId",
  listHasIngredientsControllers.update
);

module.exports = router;
