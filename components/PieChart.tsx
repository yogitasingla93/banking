"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register necessary Chart.js components and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  const data = {
    datasets: [
      {
        data: [1250, 1550, 1960, 980, 720],
        backgroundColor: [
          "#343C6A",
          "#FC7900",
          "#396AFF",
          "#4fb0ff",
          "#232323",
        ],
        hoverOffset: 20, // Zoom effect on hover
      },
    ],
    labels: ["Entertainment", "Bill Expenses", "Investment", "Shopping", "Others"],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Pie
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
              position: "top",
            },
            tooltip: {
              enabled: false, // Disable default tooltip
            },
            datalabels: {
              display: true,
              color: "white",
              font: {
                family: "Inter",
                size: 10,
              },
              formatter: (value: number, context: any) => {
                const total = context.dataset.data.reduce(
                  (sum: number, val: number) => sum + val,
                  0
                );
                const percentage = ((value / total) * 100).toFixed(2);
                const label = context.chart.data.labels[context.dataIndex];
                return `${label}\n${percentage}%`; // Label and percentage with line break
              },
            },
          },
          animation: {
            duration: 500, // Smooth animation
            easing: "easeOutBounce",
          },
          interaction: {
            mode: "nearest", // Nearest element interaction
            intersect: true, // Ensure interaction only on slice
          },
          events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
          onHover: (event: any, chartElement: any) => {
            const canvas = event.native.target as HTMLCanvasElement;
            if (chartElement && chartElement.length) {
              canvas.style.cursor = "pointer"; // Pointer on hover
            } else {
              canvas.style.cursor = "default"; // Default cursor
            }
          },
        }}
      />
    </div>
  );
};

export default PieChart;
