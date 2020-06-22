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
  //Google api call- still needs work
  app.get("/getURL", async (req, res) => {
    const queryURL = new urlParse(req.url);
    const code = queryParse.parse(queryURL.query).code;
    const oauth2Client = new google.auth.OAuth2(
      // Google Client ID:
      "853894535093-1ulhffhg4fv6i30ujcousg32460jdt07.apps.googleusercontent.com",
      // Google Client Secret:
      "YCPXLr4DtdVg-KQaXNHeTI8E",
      // link to redirect to;
      "https://agile-thicket-05064.herokuapp.com/"
    );
    const scopes = [
      "https://www.googleapis.com/auth/fitness.activity.read",
      "https://www.googleapis.com/auth/fitness.activity.write",
      "https://www.googleapis.com/auth/fitness.nutrition.read",
      "https://www.googleapis.com/auth/fitness.nutrition.write",
      "https://www.googleapis.com/auth/fitness.body.read",
      "https://www.googleapis.com/auth/fitness.body.write"
    ];
    const url = oauth2Client.generateAuthUrl({
      access_type: "online",
      scope: scopes,
      state: JSON.stringify({
        callbackURL: req.body.callbackURL,
        userID: req.body.userid
      })
    });
    requestAnimationFrame(url, (err, response, body) => {
      console.log("error: ", err);
      console.log("statusCode: ", response && response.statusCode);
      res.send({ url });
    });
    //This is from another resource I found. Potentially useful
    // async function main() {
    //   const oAuth2Client = await getAuthenticatedClient();
    //   const url = 'https://people.googleapis.com/v1/people/me?personFields=names';
    // const res = await oAuth2Client.request({url});
    // console.log(res.data);

    // const tokenInfo = await oAuth2Client.getTokenInfo(
    //   oAuth2Client.credentials.access_token
    // );
    // console.log(tokenInfo);
    // }
    const tokens = await oauth2Client.getToken(code);
    console.log(tokens);
    console.log(tokens);

    const stepArray = [];

    try {
      const result = await axios({
        method: "POST",
        headers: { authorization: "Bearer " + tokens.tokens.access_token },
        "Content-Type": "application/json",
        url: "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
        data: {
          aggregateBy: [
            {
              dataTypeName: "com.google.active_minutes",
              dataSourceId: "derived:com.google.active_minutes.delta"
            }
          ]
        }
      });
    } catch (e) {
      console.log(e);
    }
  });
};
