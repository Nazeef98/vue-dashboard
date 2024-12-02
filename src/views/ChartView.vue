<template>
  <div class="chart-container">
    <!-- First Chart -->
    <canvas id="myChart"></canvas>

    <!-- Second Chart -->
    <canvas id="lineChart"></canvas>

    <!-- Third Chart -->
    <canvas id="pieChart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";

export default {
  name: "ChartView",
  mounted() {
    Chart.register(...registerables);

    // Bar Chart
    new Chart(document.getElementById("myChart").getContext("2d"), {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Sample Data",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true, // Keep chart aspect ratio
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Line Chart
    new Chart(document.getElementById("lineChart").getContext("2d"), {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Sales Over Time",
            data: [10, 20, 15, 30, 25, 40],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true, // Keep chart aspect ratio
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Pie Chart
    new Chart(document.getElementById("pieChart").getContext("2d"), {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green"],
        datasets: [
          {
            data: [15, 25, 35, 25],
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
              "rgba(75, 192, 192, 0.7)",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true, // Keep chart aspect ratio
      },
    });
  },
};
</script>

<style scoped>
.chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: hidden; /* Prevent overflow causing infinite scroll */
  padding: 10px;
}

canvas {
  max-width: 90%;
  height: auto; /* Use auto to prevent height inflation */
  max-height: 400px; /* Constrain maximum height */
}
</style>
