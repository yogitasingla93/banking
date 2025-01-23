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


export const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Balance History",
    },
    tooltip: {
      enabled: true, 
      mode: 'index', 
      intersect: false,
    },
  },
  elements: {
    line: {
      tension: 0.4, 
      borderCapStyle: 'round' as const, 
    },
    point: {
      radius: 0, 
    },
  },
};

// Labels for the x-axis
const labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];


const createGradient = (ctx: CanvasRenderingContext2D) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, "rgba(45, 96, 255, 0.25)");
  gradient.addColorStop(1, "rgba(45, 96, 255, 0)");
  return gradient;
};


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
            data: [320, 100, 400, 200, 130, 320, 210], 
            borderColor: "#1814F3",
            borderWidth: 3,
            backgroundColor: gradient,
            tension: 0.4, 
            borderCapStyle: 'round' as const,
            pointRadius: 0, 
          },
        ],
      };
      setChartData(data);
    }
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {chartData ? <Line options={options} data={chartData} /> : null}
    </div>
  );
};

export default AreaChart;
