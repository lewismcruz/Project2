// Requiring path to so we can use relative routes to our HTML files
//const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("../views/login");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    console.log(req + " hello");
    if (req.user) {
      res.redirect("/members");
    }
    res.render("../views/login");
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    res.render("../views/signup");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    console.log(req.user, " HI MOM");
    db.User.findOne({
      where: {
        id: req.user.id
      }
    }).then(user => {
      console.log(user.dataValues);
      res.render("membersDashboard", user.dataValues);
    });
  });

  //   app.get("/test/:id", (req, res) => {
  //     db.User.findOne({
  //       where: {
  //         id: req.params.id
  //       }
  //     }).then(user => {
  //       // const user = [];

  //       // for (let i = 0; i < dbUser.length; i++) {
  //       //   const user1 = {};
  //       //   (user1.firstName = dbUser[i].firstName);
  //       //     (user1.lastName = dbUser[i].lastName);
  //       //     (user1.createdAt = dbUser[i].createdAt);
  //       //   user.push(user1);
  //       // }

  //       // console.log(user);
  //       res.render("test", user);
  //     });
  //   });
};
