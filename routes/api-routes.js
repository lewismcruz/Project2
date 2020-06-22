// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const apihelper = require("./apihelper");
const unirest = require('unirest');

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json(req.body);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  // app.post("/api/signup", (req, res) => {
  //   db.User.create(req.body).then(dbPost => {
  //     res.json(dbPost);
  //   });
  // });

  app.post("/api/signup", (req, res) => {
    db.User.create(req.body)
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  //all user data
  app.get("/api/users", (req, res) => {
    //make connection to db and get user data
    db.User.findAll({
    }).then(function(dbUser) {
      res.json(dbUser);
    });
    //res.json("/");
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

  app.get("/getAPIResponse", (req, res) => {
    api_helper.make_API_call("https://jsonplaceholder.stravaapp")
    .then(response => {
      res.json(response)
    });    
    .catch(error => {
      res.send(error)
    })
  });


  // Nutritionix food calorie counter

  const req = unirest('POST', 'https://trackapi.nutritionix.com/v2/natural/nutrients')
  .headers({
    'x-app-key': '8a9544917169c7687bec8663146d894c',
    'Content-Type': 'application/json',
    'x-app-id': '15c44cc6'
  })

  // Figure out how to send a query from our site to this API and you will get the calories 
  // for each food item consumed
  .send(JSON.stringify({"query":"i ate 2 eggs, bacon, and french toast","timezone":"US/Eastern"}))
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });

  // Nutritionix exercise activity calorie burn
  // Then we take the calories and compute how many minutes of walking, running, biking, swimming
  // user must do in order to burn X amount of calories according to what they
  // provided as food they ate.
  var req = unirest('POST', 'https://trackapi.nutritionix.com/v2/natural/exercise')
  .headers({
    'x-app-key': '8a9544917169c7687bec8663146d894c',
    'Content-Type': 'application/json',
    'x-app-id': '15c44cc6'
  })
  .send(JSON.stringify({"query":"ran 3 miles","gender":"male","weight_kg":85,"height_cm":155.5,"age":35}))
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });



}
