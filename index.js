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

const customTitle = (tooltipItems) => {
  let amount;
  tooltipItems.forEach(function (tooltipItem) {
    amount = tooltipItem.parsed.y;
  });
  return "$" + amount;
};

const customLabel = () => {
  return "";
};

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
      tooltip: {
        displayColors: false,
        callbacks: {
          title: customTitle,
          label: customLabel,
        },
        caretSize: 0,
        position: "average",
        xAlign: "center",
        yAlign: "bottom",
      },
    },
  },
});
