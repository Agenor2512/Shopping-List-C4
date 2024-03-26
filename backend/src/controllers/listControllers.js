const tables = require("../tables");

const read = async (request, response, next) => {
  try {
    const list = await tables.list.read(request.params.id);

    if (!list) {
      response.sendStatus(404);
    } else {
      response.json(list);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { read };
