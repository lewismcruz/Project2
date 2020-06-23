$(document).ready(() => {
  $("#caloriesButton").on("click", event => {
    event.preventDefault();
    console.log("You clicked");
    const foodItem1 = $("#food1")
      .val()
      .trim();
    console.log(foodItem1);
    const foodItem2 = $("#food2")
      .val()
      .trim();
    console.log(foodItem2);
    const foodItem3 = $("#food3")
      .val()
      .trim();
    console.log(foodItem3);
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

    //function postNutrition(foodItem1, foodItem2, foodItem3) {

    // Nutritionix food calorie counter
    var settings = {
      "url": "https://trackapi.nutritionix.com/v2/natural/nutrients",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "x-app-key": "8a9544917169c7687bec8663146d894c",
        "Content-Type": "application/json",
        "x-app-id": "15c44cc6"
      },
      "data": JSON.stringify({"query":foodItem1 + " " + foodItem2 + " " + foodItem3, "timezone":"US/Eastern"}),
      })
    };

    $.ajax(settings).done((response) => {
      console.log(response);
    });
    









});
