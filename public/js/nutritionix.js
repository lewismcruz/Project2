$(document).ready(() => {

  $("#caloriesButton").on("click", event => {
    event.preventDefault();
    console.log("You clicked");
    const foodItem1 = $("#food1").val().trim();
    console.log(foodItem1);
    const foodItem2 = $("#food2").val().trim();
    console.log(foodItem2);
    const foodItem3 = $("#food3").val().trim();
    console.log(foodItem3);
    const gender = $("#gender").val().trim();
    console.log(gender);
    const weight = $("#weight").val().trim();
    console.log(weight);
    const height = $("#height").val().trim();
    console.log(height);
    const age = $("#age").val().trim();
    console.log(age);
    const run = $("#runTime").val().trim();
    console.log(run);
    const walk = $("#walkTime").val().trim();
    console.log(walk);
    const bike = $("#bikeTime").val().trim();
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
    };
      
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
    
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








});

// From the user input form on what they ate and activity done
// Use let because these variables will change as users update information


/*
let weight = $("#weight");
let height = $("#height");
let gender = $("#gender");
let age = $("#age");
const run = $("#run");
const walk = $("#walk");
const bike = $("#bike");
*/



