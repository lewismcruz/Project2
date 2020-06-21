const db = require("../models");
const { google } = require("googleapis");

module.exports = function(app) {
//google api KEY= AIzaSyDjRdBEgqxg-w0WzKWvM9Rd_ODIuyvXrIk
app.get("/getURL", (req, res) => {
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
    "https://www.googleapis.om/auth/fitness.activity.read profile email open id"
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
  const tokens = await oauth2Client.getToken(code);
  console.log (tokens);
});
};

