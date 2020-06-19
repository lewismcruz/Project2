// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const express = require("express");
const google = require("googleapis");
require("dotenv").config();
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    //console.log(process.env.GOOGLE_API_KEY)
     //If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("index");
  });

  

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.render("signup");
  });

  app.get("/dashboard", (req, res) => {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.render("membersDashboard");
  });
  // app.get("/login", (req, res) => {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });

  // // Here we've add our isAuthenticated middleware to this route.
  // // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, (req, res) => {
  //   res.sendFile(path.join(__dirname, "../views/membersDashboards.handlebars"));
  // });
};
//https://www.googleapis.com/fitness/v1/resourcePath?parameters