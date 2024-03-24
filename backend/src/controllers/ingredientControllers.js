// Import access to database tables
const tables = require("../tables");

const browse = async (_, response, next) => {
  try {
    const ingredients = await tables.ingredient.readAll();

    response.json(ingredients);
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
  browse,
  search,
};
