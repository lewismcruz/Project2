// Nutritionix exercise activity calorie burn
// Then we take the calories and compute how many minutes of walking, running, biking, swimming
// user must do in order to burn X amount of calories according to what they
// provided as food they ate.
$(document).ready(() => {
  const gender = $("#gender")
    .val()
    .trim();
  console.log(gender);
  const weight = $("#weight")
    .val()
    .trim();
  console.log(weight);
  const height = $("#height")
    .val()
    .trim();
  console.log(height);
  const age = $("#age")
    .val()
    .trim();
  console.log(age);
  const run = $("#runTime")
    .val()
    .trim();
  console.log(run);
  const walk = $("#walkTime")
    .val()
    .trim();
  console.log(walk);
  const bike = $("#bikeTime")
    .val()
    .trim();
  console.log(bike);
  const settings = {
    url: "https://trackapi.nutritionix.com/v2/natural/exercise",
    method: "POST",
    timeout: 0,
    headers: {
      "x-app-key": process.env.X_APP_API_KEY,
      "Content-Type": "application/json",
      "x-app-id": process.env.X_APP_ID
    },
    //"data": JSON.stringify({"query":"ran 3 miles","gender":"male","weight_kg":85,"height_cm":155.5,"age":35}),
    data: JSON.stringify({
      query:
        gender +
        " " +
        weight +
        " " +
        height +
        " " +
        age +
        " " +
        run +
        " " +
        walk +
        " " +
        bike
    })
  };

  $.ajax(settings).done(response => {
    console.log(response);
  });
});
