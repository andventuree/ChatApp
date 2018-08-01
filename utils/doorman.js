const doorman = {};

//if you're not authorized, you get a 403 forbidden
doorman.confirmSelf = (req, res, next) => {
  //remember: passport only adds req.user after logging in
  //otherwise, req.user would be undefined
  if (req.user && req.user.id === Number(req.params.userId)) {
    next();
  } else {
    res.status(403).end();
  }
};

doorman.confirmAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin === "true") {
    next();
  } else {
    res.status(403).end();
  }
};

module.exports = doorman;
