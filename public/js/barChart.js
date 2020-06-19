const ctx = document.getElementById("myChart");

const age = [20, 19, 25, 23];
const users = ["Celeste", "Lewis", "Brandon", "Joel"];

// eslint-disable-next-line no-unused-vars
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: users,
    datasets: [
      {
        label: "Team",
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
