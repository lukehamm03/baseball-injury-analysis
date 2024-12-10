// Sample Placeholder Visualization
document.addEventListener("DOMContentLoaded", () => {
  const injuryChart = document.getElementById("injury-chart");
  const statsChart = document.getElementById("stats-chart");

  // Example data
  const data = [
    {
      x: ["Metric A", "Metric B", "Metric C"],
      y: [20, 14, 23],
      type: "bar",
    },
  ];

  const layout = {
    title: "Example Visualization",
    xaxis: { title: "Metrics" },
    yaxis: { title: "Injury Risk (%)" },
  };

  Plotly.newPlot(injuryChart, data, layout);
  Plotly.newPlot(statsChart, data, layout);
});
