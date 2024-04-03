import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import "../App.css";

import revenueData from "../data/revenueData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const LineChart = () => {
  return (
    <div className="LineChart">
      <div className="dataCard revenueCard">
        <div className="text-left font-semibold text-2xl -mt-5 ml-5">
          Income and expenses
        </div>

        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Income",
                data: revenueData.map((data) => data.income),
                backgroundColor: "#51AA58",
                borderColor: "#51AA58",
              },
              {
                label: "Expenses",
                data: revenueData.map((data) => data.expense),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default LineChart;
