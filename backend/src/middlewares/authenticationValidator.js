const jwt = require("jsonwebtoken");

const validateAuthentication = async (request, response, next) => {
  // Retrieve bearer token authentication
  const bearer = request.get("Authorization");
  const token = bearer.split("Bearer ")[1];
  console.info("jwt :", token);

  try {
    request.user = jwt.verify(token, process.env.APP_SECRET);
    next();
  } catch (error) {
    console.error(error);
    response.status(401).send("You're not authenticated.");
  }
};

module.exports = { validateAuthentication };
