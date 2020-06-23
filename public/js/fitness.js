$(document).ready(() => {
  $("#caloriesButton").on("click", event => {
    event.preventDefault();
    const run = $("#runTime")
      .val()
      .trim();
    const settings = {
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
        query: run
      })
    };

    $.ajax(settings).then(res => {
      console.log(res);
      const resObjConstructor = `
        <div class="container">
            <div class="row">
              <div class="col">
           <p>
           <h3>Activity: ${res.exercises[0].name}</h3>
           <h5>Active Mins: ${res.exercises[0].duration_min}</h5>
           <h5>Calories Burned: ${res.exercises[0].nf_calories}</h5>
           </p>
              </div>
           </div>
        </div>
      `;
      const element = document.getElementById("activity");
      element.innerHTML = resObjConstructor;
    });
  });
});
