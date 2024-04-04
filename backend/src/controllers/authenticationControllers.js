const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

const login = async (request, response, next) => {
  try {
    const verifiedPassword = await argon2.verify(
      request.user.password,
      request.body.password
    );

    if (verifiedPassword === true) {
      const token = await jwt.sign(
        {
          id: request.user.id,
          email: request.user.email,
        },
        process.env.APP_SECRET
      );

      console.info(token);

      response
        .cookie("authentication", token, {
          httpOnly: true,
          sameSite: "Lax",
        })
        .json({
          message: "Authentication succeded !",
          id: request.user.id,
          email: request.user.email,
        });
    } else {
      response.status(401).send("Wrong Credentials.");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
