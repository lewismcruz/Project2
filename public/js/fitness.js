// Nutritionix exercise activity calorie burn
// Then we take the calories and compute how many minutes of walking, running, biking, swimming
// user must do in order to burn X amount of calories according to what they
// provided as food they ate.
 var settings = {
  "url": "https://trackapi.nutritionix.com/v2/natural/exercise",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "x-app-key": "8a9544917169c7687bec8663146d894c",
    "Content-Type": "application/json",
    "x-app-id": "15c44cc6"
  },
  //"data": JSON.stringify({"query":"ran 3 miles","gender":"male","weight_kg":85,"height_cm":155.5,"age":35}),
  "data": JSON.stringify({"query":gender + " " + weight + " " + height + " " + age + " " + run + " " + walk + " " + bike}),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
})