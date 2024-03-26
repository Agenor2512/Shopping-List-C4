const tables = require("../tables");

const update = async (request, response, next) => {
  const { ingredientId, listId } = request.params;
  const { quantity } = request.body.quantity;

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

module.exports = { update };
