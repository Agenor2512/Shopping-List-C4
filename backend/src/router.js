const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const ingredientControllers = require("./controllers/ingredientControllers");
const listControllers = require("./controllers/listControllers");
const listHasIngredientsControllers = require("./controllers/listHasIngredientsControllers");

const authenticationService = require("./services/authentication");

router.post(
  "/register",
  authenticationService.hashPassword,
  userControllers.add
);

router.get("/ingredients", ingredientControllers.search);
router.post("/ingredients", ingredientControllers.add);

router.get("/lists/:id", listControllers.read);

router.post(
  "/lists/:listId/ingredients/:ingredientId",
  listHasIngredientsControllers.add
);
router.put(
  "/lists/:listId/ingredients/:ingredientId",
  listHasIngredientsControllers.update
);
router.delete(
  "/lists/:listId/ingredients/:ingredientId",
  listHasIngredientsControllers.destroy
);
module.exports = router;
