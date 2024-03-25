// Import access to database tables
const tables = require("../tables");

const read = async (request, response, next) => {
  try {
    const ingredient = await tables.ingredient.read(request.params.id);

    if (ingredient === null) {
      response.sendStatus(404);
    } else {
      response.json(ingredient);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (request, response, next) => {
  const ingredient = request.body;

  try {
    const insertId = await tables.ingredient.create(ingredient);

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
  read,
  add,
  search,
};
