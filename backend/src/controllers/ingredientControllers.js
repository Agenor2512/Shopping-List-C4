// Import access to database tables
const tables = require("../tables");

const add = async (request, response, next) => {
  const ingredient = request.body;

  try {
    const insertId = await tables.ingredient.create(ingredient);
    await tables.list_has_ingredients.create({
      ...ingredient,
      ingredientId: insertId,
    });

    response.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

const search = async (request, response, next) => {
  try {
    const ingredients = await tables.ingredient.searchByQuery(
      request.query.query
    );

    response.json(ingredients);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
  search,
};
