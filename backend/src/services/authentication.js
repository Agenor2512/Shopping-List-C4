const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, _, next) => {
  try {
    const { password } = req.body;
    req.body.password = await argon2.hash(password, hashingOptions);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { hashPassword };
