"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define the chart options with explicit typing
export const options: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
      datalabels: {
        display: function(context) {
            // Disable data label for the section you want to hide
            return context.dataIndex === 100; // Example: hide label for March
        }
    },
    legend: {
      display: true, 
      labels: {
        usePointStyle: true, 
        pointStyle: 'circle', 
        padding: 20, 
      },
    },
    title: {
      display: true,
      text: "Weekly Activity",
    },
    tooltip: {
      enabled: true, 
      mode: 'index', 
      intersect: false, 
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'transparent', // Set grid color to transparent
      },
      max: 1000, // Adjust this value based on your data range
    },
  },
};

const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export const data = {
  labels,
  datasets: [
    {
      label: "Deposit",
      data: [500, 700, 400, 800, 650, 900, 550], // Replace with dynamic data if needed
      backgroundColor: "#396AFF",
      barThickness: 10, // Set bar thickness to 12
      borderRadius: { 
        topLeft: 10, 
        topRight: 10, 
        bottomLeft: 10, // Set bottom left radius
        bottomRight: 10 // Set bottom right radius
      },
      categoryPercentage: 0.5, // Adjust this value to control the gap
      barPercentage: 0.5, // Adjust this value to control the gap
    },
    {
      label: "Withdraw",
      data: [300, 450, 500, 600, 700, 800, 400], // Replace with dynamic data if needed
      backgroundColor: "#232323",
      barThickness: 10, // Set bar thickness to 12
      borderRadius: { 
        topLeft: 10, 
        topRight: 10, 
        bottomLeft: 10, // Set bottom left radius
        bottomRight: 10 // Set bottom right radius
      },
      categoryPercentage: 0.5, // Adjust this value to control the gap
      barPercentage: 0.5, // Adjust this value to control the gap
    },
  ],
};

// VerticalBarChart component
const VerticalBarChart: React.FC = () => {
  return <Bar options={options} data={data} />;
};

export default VerticalBarChart;