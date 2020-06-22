const ctx = document.getElementById("fitnessChart");

const age = [30, 0, 50, 35, 73, 0, 0];
const users = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// eslint-disable-next-line no-unused-vars
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: users,
    datasets: [
      {
        label: "Week 1",
        data: age,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)"
        ]
      }
    ]
  }
});

const ctx = document.getElementById("nutritionChart");

const age = [30, 0, 50, 35, 73, 0, 0];
const users = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// eslint-disable-next-line no-unused-vars
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: users,
    datasets: [
      {
        label: "Activity Minutes",
        data: age,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)"
        ]
      }
    ]
  }
});
