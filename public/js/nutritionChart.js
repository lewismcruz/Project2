const ctx = document.getElementById("fitnessChart");
const goal = [30, 30, 30, 30, 30, 30, 30];
const actual = [30, 15, 50, 35, 73, 0, 0];
const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
// eslint-disable-next-line no-var
var ctx2 = document.getElementById("nutritionChart1").getContext("2d");
const nutritionChart = new Chart(ctx2, {
  type: "pie",
  data: {
    labels: ["carbs", "protein", "fats"],
    datasets: [
      {
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#95a5a6",
          "#9b59b6",
          "#f1c40f",
          "#e74c3c",
          "#34495e"
        ],
        data: [12, 19, 3]
      }
    ]
  }
});

// const ctx2 = document.getElementById("nutritionChart");
// const carbs = [30, 0, 50, 35, 73, 0, 0];
// const protein = [35, 20, 50, 35, 73, 0, 0];
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: days,
//     datasets: [{
//       label: 'carbs',
//       data: [12, 19, 3, 17, 28, 24, 7]
//     }, {
//       label: 'protein',
//       data: [30, 29, 5, 5, 20, 3, 10]
//     }]
//   }
// });

//FITNESS CHART - DONT EDIT
// const ctx = document.getElementById("fitnessChart");
// const minutes = [30, 15, 50, 35, 73, 0, 0];
// const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// // eslint-disable-next-line no-unused-vars
// const fitnessChart = new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: day,
//     datasets: [
//       {
//         label: "Week 1",
//         data: minutes,
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)"
//         ]
//       },
//     ]
//   }
// });
