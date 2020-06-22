

$(document).ready(() => {

  $("#caloriesButton").on("click", event => {
    event.preventDefault();
    console.log("You clicked");
    let foodItem1 = $("#food1").val().trim();
    console.log(foodItem1);
    let foodItem2 = $("#food2").val().trim();
    console.log(foodItem2);
    let foodItem3 = $("#food3").val().trim();
    console.log(foodItem3);
    
    
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
    
    //.then(( => {}))
    
    
    
    
 //   }
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




/*
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
    "data": JSON.stringify({"query":"ran 3 miles","gender":"male","weight_kg":85,"height_cm":155.5,"age":35}),
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
*/
