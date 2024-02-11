import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary chart components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MyChartProps {
  trades: Trade[];
}

interface ColorScheme {
  backgroundColor: string;
  borderColor: string;
}

const MyChart: React.FC<MyChartProps> = ({ trades }) => {
  // Function to generate a single color scheme for simplicity
  const generateColorScheme = (): ColorScheme => {
    const red = Math.floor((Math.random() * 255) / 2 + 128);
    const green = Math.floor((Math.random() * 255) / 2 + 128);
    const blue = Math.floor((Math.random() * 255) / 2 + 128);
    return {
      backgroundColor: `rgba(${red}, ${green}, ${blue}, 0.4)`,
      borderColor: `rgba(${red}, ${green}, ${blue}, 1)`,
    };
  };

  // Transform trades into labels and data, and format dates
  const labels = trades.map((trade) =>
    new Date(trade.date).toLocaleDateString("en-US")
  );
  const dataValues = trades.map((trade) => trade.cumPerformance);

  const colorScheme = generateColorScheme();

  const data = {
    labels, // Dates
    datasets: [
      {
        label: "Cumulative Performance",
        data: dataValues, // Performance values
        fill: false,
        backgroundColor: colorScheme.backgroundColor,
        borderColor: colorScheme.borderColor,
        tension: 0.1,
      },
    ],
  };

  return (
    <Line
      data={data}
      options={{
        scales: {
          y: {
            title: {
              display: true,
              text: "Cumulative Performance (%)",
              color: "rgba(256, 256, 256, 1)",
              font: {
                size: 12,
                family:
                  "'Montserrat', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              },
            },
            beginAtZero: true,
            ticks: {
              color: "rgba(256, 256, 256, 1)",
              font: {
                size: 12,
                family:
                  "'Montserrat', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              },
            },
            grid: {
              color: "rgba(256, 256, 256, 1)",
              drawTicks: false,
            },
          },
          x: {
            ticks: {
              color: "rgba(256, 256, 256, 1)",
              font: {
                size: 12,
                family:
                  "'Montserrat', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              },
            },
            grid: {
              color: "rgba(256, 256, 256, 0.2)",
              // drawOnChartArea: false,
              // drawTicks: false,
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              color: "rgba(256, 256, 256, 1)",
              font: {
                size: 12,
                family:
                  "'Montserrat', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              },
            },
          },
          title: {
            display: true,
            color: "rgba(256, 256, 256, 1)",
            text: "Portfolio Performance",
            font: {
              size: 18,
              family:
                "'Montserrat', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
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
