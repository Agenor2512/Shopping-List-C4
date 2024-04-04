const Joi = require("joi");

const validateUser = async (req, res, next) => {
  const userSchema = Joi.object({
    name: Joi.string()
      .pattern(/^[a-zA-Z0-9À-ÖØ-öø-ÿ-?\s]+$/)
      .min(3)
      .max(30)
      .messages({
        "string.min": "Your name should contain 3 characters at least.",
        "string.max": "Your name should contain no further 30 characters.",
        "string.empty": "Please complete the field : Name.",
      })
      .required(),

    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr"] } })
      .pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/)
      .required(),

    password: Joi.string().pattern(/^(?=.*[*#])[a-zA-Z0-9À-ÖØ-öø-ÿ*#]{8,15}$/),
    passwordCheck: Joi.ref("password"),
  });

  const { error, value } = userSchema.validate(req.body);

  if (error) {
    console.error(error);
    res.sendStatus(400);
  } else {
    console.info("Validation succeded:", value);
    next();
  }
};

module.exports = { validateUser };
