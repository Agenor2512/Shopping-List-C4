const tables = require("../tables");

const add = async (request, response, next) => {
  const { ingredientId, listId } = request.params;

  try {
    const insertId = await tables.list_has_ingredients.create({
      ingredientId,
      listId,
    });

    response.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

const update = async (request, response, next) => {
  const { ingredientId, listId } = request.params;
  const { quantity } = request.body;

  try {
    await tables.list_has_ingredients.update({
      ingredientId,
      listId,
      quantity,
    });

    response.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = { add, update };
