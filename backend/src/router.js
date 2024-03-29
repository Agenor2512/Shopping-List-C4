const express = require("express");

const router = express.Router();

const ingredientControllers = require("./controllers/ingredientControllers");
const listControllers = require("./controllers/listControllers");
const listHasIngredientsControllers = require("./controllers/listHasIngredientsControllers");

router.get("/ingredients", ingredientControllers.search);
router.post("/ingredients", ingredientControllers.add);

router.get("/lists/:id", listControllers.read);

router.post(
  "/list/:listId/ingredients/:ingredientId",
  listHasIngredientsControllers.add
);
router.put(
  "/list/:listId/ingredients/:ingredientId",
  listHasIngredientsControllers.update
);
router.delete(
  "/list/:listId/ingredients/:ingredientId",
  listHasIngredientsControllers.destroy
);
module.exports = router;
