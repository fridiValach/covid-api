import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = ({ number, names, numberWithCommas }) => {
  const titles = names.map((el, i) => i+1 +". "+el + " - " + numberWithCommas(number[i]));

  const pieData = {
    labels: titles,
    datasets: [
      {
        label: "number of Votes",
        data: number,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 206, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
          "rgb(255, 109, 64)",
          "rgb(125, 169, 34)",
          "rgb(225, 99, 251)",
          "rgb(225, 99, 101)",
        ],
        borderColor: ["grey"],
      },
    ],
  };
  return (
    <div style={{ width: "100%" }}>
      <Pie data={pieData} />
    </div>
  );
};

export default PieChart;
