$(document).ready(() => {
  $("#caloriesButton").on("click", event => {
    event.preventDefault();
    console.log("You clicked");
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

 
    //===== Nutritionix exercise activity calorie burn calculator API =====
    const exerciseAPIcall = {
      url: "https://trackapi.nutritionix.com/v2/natural/exercise",
      method: "POST",
      timeout: 0,
      headers: {
        "x-app-key": "8a9544917169c7687bec8663146d894c",
        "Content-Type": "application/json",
        "x-app-id": "15c44cc6"
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

    $.ajax(exerciseAPIcall).done(response => {
      console.log(response);
    });
  });
});
