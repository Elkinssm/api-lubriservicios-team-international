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
  if (user.role === "admin") {
    next();
  } else {
    next(boom.unauthorized("No es admin"));
  }
}
function checkRoles(...roles) {
  return (req, res, next) => {
    console.log(roles);
    const user = req.user;
    // ['admin', 'customer'];
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized("No es admin"));
    }
  };
}

module.exports = { checkApiKey, checkAdminRole, checkRoles };
