const argon2 = require("argon2");
const tables = require("../tables");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (request, _, next) => {
  try {
    const { password } = request.body;
    request.body.password = await argon2.hash(password, hashingOptions);
    next();
  } catch (error) {
    next(error);
  }
};

const checkEmailAndPassword = async (request, response, next) => {
  try {
    const login = await tables.user.readByEmailWithPassword(request.body.email);

    if (login.length !== 0) {
      request.user = {
        id: login[0].id,
        email: login[0].email,
        password: login[0].password,
      };
      next();
    } else {
      response.sendStatus(422);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { hashPassword, checkEmailAndPassword };
