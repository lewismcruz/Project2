const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    if (req.user) {
      res.redirect("members");
    }
    res.render("login");
  });

  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("members");
    }
    res.render("login");
  });

  app.get("/signup", (req, res) => {
    res.render("signup");
  });

  app.get("/members", isAuthenticated, (req, res) => {
    db.User.findOne({
      where: {
        id: req.user.id
      }
    }).then(user => {
      const timeEl = JSON.stringify(user.dataValues.createdAt);
      const newTime = timeEl.split("-");
      const sliceTime = newTime[0].slice(1);

      const userObj = {
        firstName: user.dataValues.firstName,
        lastName: user.dataValues.lastName,
        timer: sliceTime
      };
      console.log(userObj);
      res.render("membersDashboard", userObj);
    });
  });

  app.get("/nutrition", isAuthenticated, (req, res) => {
    
    res.render("foodform");
  });

  app.get("/fitness", isAuthenticated, (req, res) => {
    
    res.render("fitness");
  });
};
