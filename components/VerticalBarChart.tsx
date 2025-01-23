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
import ChartDataLabels from "chartjs-plugin-datalabels"; 
import { Bar } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels 
);


export const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "right", 
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 20,
      },
    },
    title: {
      display: false, 
    },
    tooltip: {
      enabled: true,
      mode: "index",
      intersect: false,
    },
    datalabels: {
      display: false, 
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
        color: "transparent",
      },
      max: 500, 
    },
  },
};

const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export const data = {
  labels,
  datasets: [
    {
      label: "Deposit",
      data: [250, 350, 200, 400, 370, 450, 270],
      backgroundColor: "#396AFF",
      barThickness: 8,
      borderRadius: {
        topLeft: 10,
        topRight: 10,
        bottomLeft: 10,
        bottomRight: 10,
      },
      categoryPercentage: 0.5, 
      barPercentage: 0.4, 
    },
    {
      label: "Withdraw",
      data: [150, 210, 250, 300, 350, 400, 200],
      backgroundColor: "#232323",
      barThickness: 8,
      borderRadius: {
        topLeft: 10,
        topRight: 10,
        bottomLeft: 10,
        bottomRight: 10,
      },
      categoryPercentage: 0.5,
      barPercentage: 0.4,
    },
  ],
};

// VerticalBarChart component
const VerticalBarChart: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        padding: "20px", 
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", 
        position: "relative",
      }}
    >

      <Bar options={options} data={data} />
    </div>
  );
};

export default VerticalBarChart;
