"use client";

import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// Chart options
export const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
    title: {
      display: true,
      text: "Balance History",
    },
    tooltip: {
      enabled: true, // Enable tooltips
      mode: 'index', // Show tooltips for all datasets at the hovered index
      intersect: false, // Show tooltips even if the mouse is not directly over a point
    },
  },
  elements: {
    line: {
      tension: 0.4, // Adjust this value for more or less curvature
      borderCapStyle: 'round' as const, // Makes the ends of the line rounded
    },
    point: {
      radius: 0, // Set to 0 to hide the points
    },
  },
};

// Labels for the x-axis
const labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];

// Generate gradient for the chart
const createGradient = (ctx: CanvasRenderingContext2D) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, "rgba(45, 96, 255, 0.25)");
  gradient.addColorStop(1, "rgba(45, 96, 255, 0)");
  return gradient;
};

// AreaChart component
const AreaChart: React.FC = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = createGradient(ctx);
      const data = {
        labels,
        datasets: [
          {
            fill: true,
            label: "",
            data: [120, 300, 450, 700, 200, 500, 800], // Replace with dynamic data if needed
            borderColor: "#1814F3",
            borderWidth: 3,
            backgroundColor: gradient,
            tension: 0.4, // Adjust this value for more or less curvature
            borderCapStyle: 'round' as const, // Makes the ends of the line rounded
            pointRadius: 0, // Set to 0 to hide the points
          },
        ],
      };
      setChartData(data);
    }
  }, []);

  return chartData ? <Line options={options} data={chartData} /> : null;
};

export default AreaChart;