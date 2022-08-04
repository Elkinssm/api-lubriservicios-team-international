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
  console.log(user);
  if (user.role === "Admin") {
    next();
  } else {
    next(boom.unauthorized("You are not an administrator"));
  }
}
function checkRoles(...roles) {
  return (req, res, next) => {
    console.log(roles);
    const user = req.user;
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized("No es admin"));
    }
  };
}

module.exports = { checkApiKey, checkAdminRole, checkRoles };
