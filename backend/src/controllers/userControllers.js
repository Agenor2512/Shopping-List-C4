const tables = require("../tables");

const add = async (request, response, next) => {
  const userInformations = {
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
  };

  try {
    const insertId = await tables.user.create(userInformations);

    response.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

module.exports = { add };
