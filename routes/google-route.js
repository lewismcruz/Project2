// const { google } = require("googleapis");
//https://www.googleapis.com/fitness/v1/resourcePath?parameters
// This app on heroku: https://agile-thicket-05064.herokuapp.com/
// //Google api call- still needs work
// app.get("/getURL", async (req, res) => {
//     const queryURL = new urlParse(req.url);
//     const code = queryParse.parse(queryURL.query).code;
//     const oauth2Client = new google.auth.OAuth2(
//       // Google Client ID:
//       "853894535093-1ulhffhg4fv6i30ujcousg32460jdt07.apps.googleusercontent.com",
//       // Google Client Secret:
//       "YCPXLr4DtdVg-KQaXNHeTI8E",
//       // link to redirect to;
//       "https://agile-thicket-05064.herokuapp.com/"
//     );
//     const scopes = [
//       "https://www.googleapis.com/auth/fitness.activity.read",
//       "https://www.googleapis.com/auth/fitness.activity.write",
//       "https://www.googleapis.com/auth/fitness.nutrition.read",
//       "https://www.googleapis.com/auth/fitness.nutrition.write",
//       "https://www.googleapis.com/auth/fitness.body.read",
//       "https://www.googleapis.com/auth/fitness.body.write"
//     ];
//     const url = oauth2Client.generateAuthUrl({
//       access_type: "offline",
//       scope: scopes,
//       state: JSON.stringify({
//         callbackURL: req.body.callbackURL,
//         userID: req.body.userid
//       })
//     });
//     requestAnimationFrame(url, (err, response, body) => {
//       console.log("error: ", err);
//       console.log("statusCode: ", response && response.statusCode);
//       res.send({ url });
//     });
//     //This is from another resource I found. Potentially useful
//     // async function main() {
//     //   const oAuth2Client = await getAuthenticatedClient();
//     //   const url = 'https://people.googleapis.com/v1/people/me?personFields=names';
//     // const res = await oAuth2Client.request({url});
//     // console.log(res.data);

//     // const tokenInfo = await oAuth2Client.getTokenInfo(
//     //   oAuth2Client.credentials.access_token
//     // );
//     // console.log(tokenInfo);
//     // }
//     const tokens = await oauth2Client.getToken(code);
//     console.log(tokens);
//     console.log(tokens);

//     const minutesArray = [];

//     try {
//       const result = await axios({
//         method: "POST",
//         headers: { authorization: "Bearer " + tokens.tokens.access_token },
//         "Content-Type": "application/json",
//         url: "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
//         data: {
//           aggregateBy: [
//             {
//               dataTypeName: "com.google.active_minutes",
//               dataSourceId: "derived:com.google.active_minutes.delta"
//             }
//           ]
//         }
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   });