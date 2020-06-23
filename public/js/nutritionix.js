$(document).ready(() => {
  $("#caloriesButton").on("click", event => {
    event.preventDefault();
    const foodItem1 = $("#food1")
      .val()
      .trim();
    const foodItem2 = $("#food2")
      .val()
      .trim();
    const foodItem3 = $("#food3")
      .val()
      .trim();

    //function postNutrition(foodItem1, foodItem2, foodItem3) {

    // Nutritionix food calorie counter
    const settings = {
      url: "https://trackapi.nutritionix.com/v2/natural/nutrients",
      method: "POST",
      timeout: 0,
      headers: {
        "x-app-key": process.env.X_APP_API_KEY,
        "Content-Type": "application/json",
        "x-app-id": process.env.X_APP_ID
      },
      data: JSON.stringify({
        query: foodItem1 + " " + foodItem2 + " " + foodItem3,
        timezone: "US/Eastern"
      })
    };

    $.ajax(settings).then(res => {
      console.log(res);
      const resObjConstructor = `
  <div class="container">
      <div class="row">
        <div class="col">
     <p>
     <h5>Protien: ${res.foods[0].nf_protein}, ${res.foods[1].nf_protein}, ${res.foods[2].nf_protein}</h5>
     <h5>Fat: ${res.foods[0].nf_total_fat}, ${res.foods[1].nf_total_fat}, ${res.foods[2].nf_total_fat}</h5>
     <h5>Carbs: ${res.foods[0].nf_total_carbohydrate}, ${res.foods[1].nf_total_carbohydrate}, ${res.foods[2].nf_total_carbohydrate} </h5>
     <h5>Calories: ${res.foods[0].nf_calories}, ${res.foods[1].nf_calories}, ${res.foods[2].nf_calories} </h5>
     </p>
        </div>
     </div>
  </div>
`;
      const element = document.getElementById("obj");
      element.innerHTML = resObjConstructor;
    });
  });
});
