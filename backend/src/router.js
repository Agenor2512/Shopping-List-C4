const express = require("express");

const router = express.Router();

const authenticationControllers = require("./controllers/authenticationControllers");
const userControllers = require("./controllers/userControllers");
const ingredientControllers = require("./controllers/ingredientControllers");
const listControllers = require("./controllers/listControllers");
const listHasIngredientsControllers = require("./controllers/listHasIngredientsControllers");

const authenticationService = require("./services/authentication");
const userValidator = require("./middlewares/userValidator");

// Register
router.post(
  "/register",
  userValidator.validateUser,
  authenticationService.hashPassword,
  userControllers.add
);

// Login
router.post(
  "/login",
  authenticationService.checkEmailAndPassword,
  authenticationControllers.login
);

// Ingredients part
router.get("/ingredients", ingredientControllers.search);
router.post("/ingredients", ingredientControllers.add);

// Lists part
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
