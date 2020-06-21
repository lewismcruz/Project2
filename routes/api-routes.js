//https://www.googleapis.com/fitness/v1/resourcePath?parameters
// This app on heroku: https://agile-thicket-05064.herokuapp.com/

// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const { google } = require("googleapis");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};

// // google api KEY= AIzaSyDjRdBEgqxg-w0WzKWvM9Rd_ODIuyvXrIk
// app.get("/getURL", (req, res) => {
//   const queryURL = new urlParse(req.url);
//   const code = queryParse.parse(queryURL.query).code;
//   const oauth2Client = new google.auth.OAuth2(
//     // Google Client ID:
//     "853894535093-1ulhffhg4fv6i30ujcousg32460jdt07.apps.googleusercontent.com",
//     // Google Client Secret:
//     "YCPXLr4DtdVg-KQaXNHeTI8E",
//     // link to redirect to;
//     "https://agile-thicket-05064.herokuapp.com/"
//   );
//   const scopes = [
//     "https://www.googleapis.om/auth/fitness.activity.read profile email open id"
//   ];
//   const url = oauth2Client.generateAuthUrl({
//     access_type: "online",
//     scope: scopes,
//     state: JSON.stringify({
//       callbackURL: req.body.callbackURL,
//       userID: req.body.userid
//     })
//   });
//   requestAnimationFrame(url, (err, response, body) => {
//     console.log("error: ", err);
//     console.log("statusCode: ", response && response.statusCode);
//     res.send({ url });
//   });
//   const tokens = await oauth2Client.getToken(code);
//   console.log (tokens);
// });
