const boom = require("@hapi/boom");

const { config } = require("./../config/config");

function checkApiKey(req, res, next) {
  const apiKey = req.headers["api"];
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

function checkAdminRole(req, res, next) {
  console.log(req.user);
  const user = req.user;
  const validate = user.role.name;
  console.log(validate);
  if (validate === "Admin") {
    next();
  } else {
    next(boom.unauthorized("You are not an administrator"));
  }
}

function checkRoles(...roles) {
  return (req, res, next) => {
    console.log(roles);
    const user = req.user;
    console.log(user);
    const validateRoles = user.role.name;
    console.log(validateRoles);
    if (roles.includes(validateRoles)) {
      next();
    } else {
      next(
        boom.unauthorized(
          "You do not have permissions, contact the administrator"
        )
      );
    }
  };
}

module.exports = { checkApiKey, checkAdminRole, checkRoles };
