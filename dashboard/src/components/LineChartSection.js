import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export const LineChartSection = () => {
  const maxPoints = 30; 
  const intervalMs = 5 * 1000; 

  const [chartData, setChartData] = useState({
    labels: Array.from({ length: maxPoints }, (_, i) => `-${maxPoints - i}s`),
    datasets: [
      {
        label: "Live Price ₹",
        data: Array.from({ length: maxPoints }, () =>
          (200 + Math.random() * 20 - 5).toFixed(2)
        ),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  });

  const chartRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      const oldData = [...chartData.datasets[0].data];
      const newPrice = (100 + Math.random() * 10 - 5).toFixed(2);
      const updatedData = [...oldData.slice(1), newPrice];

      const newLabels = chartData.labels
        .slice(1)
        .concat(`${new Date().toLocaleTimeString().split(" ")[0]}`);

      setChartData((prev) => ({
        ...prev,
        labels: newLabels,
        datasets: [
          {
            ...prev.datasets[0],
            data: updatedData,
          },
        ],
      }));
    }, intervalMs);

    return () => clearInterval(interval);
  }, [chartData]);

  const options = {
    responsive: true,
    animation: {
      duration: 800,
      easing: "linear",
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "📈 Real-Time Moving Price Chart",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return <Line ref={chartRef} data={chartData} options={options} />;
};
