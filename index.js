import jsonFile from "./data.json" assert { type: "json" };

let xValues = jsonFile.map((x) => {
  return x.day;
});

let yValues = jsonFile.map((y) => {
  return y.amount;
});

var barColors = [
  "hsl(10, 79%, 65%)",
  "hsl(10, 79%, 65%)",
  "hsl(186, 34%, 60%)",
  "hsl(10, 79%, 65%)",
  "hsl(10, 79%, 65%)",
  "hsl(10, 79%, 65%)",
  "hsl(10, 79%, 65%)",
];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
        borderRadius: 3,
        borderSkipped: false,
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
        ticks: {
          padding: 10,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
        ticks: {
          callback: (value, index, values) => {
            return;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
