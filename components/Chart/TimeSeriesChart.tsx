import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

interface MyChartProps {
  trades: Trade[];
}

const MyChart: React.FC<MyChartProps> = ({ trades }) => {
  const data = {
    // Use the trade dates directly without conversion to labels
    datasets: [
      {
        label: "Performance",
        data: trades.map((trade) => ({
          x: trade.date, // Use the ISO date string directly
          y: trade.cumPerformance,
        })),
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <Line
      data={data}
      options={{
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day",
            },
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Performance (%)",
            },
          },
        },
        maintainAspectRatio: false,
        responsive: true,
      }}
    />
  );
};

export default MyChart;
