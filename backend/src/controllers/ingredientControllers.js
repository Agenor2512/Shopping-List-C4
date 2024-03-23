// Import access to database tables
const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const ingredient = await tables.ingredient.readAll();

    res.json(ingredient);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
};
