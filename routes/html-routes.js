// const moment = require('moment'); // require
// moment().format();
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
    db.User.findOne({
      where: {
        id: req.user.id
      }
    }).then(user => {
      const timeEl = JSON.stringify(user.dataValues.createdAt);
      const newTime = timeEl.split("-");
      const sliceTime = newTime[0].slice(1);
      // console.log(timeEl);
      // console.log(newTime);
      // console.log(sliceTime);

      const userObj = {
        firstName: user.dataValues.firstName,
        lastName: user.dataValues.lastName,
         timer: sliceTime
      };
      console.log(userObj);
      res.render("membersDashboard", userObj);
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
