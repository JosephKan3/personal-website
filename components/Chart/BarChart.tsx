import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the chart components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface MyChartProps {
  dataDictionary: {
    [key: string]: number;
  };
}

interface ColorScheme {
  backgroundColor: string[];
  borderColor: string[];
}

const MyChart: React.FC<MyChartProps> = ({ dataDictionary }) => {
  // Extract labels and values from the dataDictionary
  const labels = Object.keys(dataDictionary);
  const dataValues = Object.values(dataDictionary);

  // Function to generate colors
  const generateColors = (count: number) => {
    const colors: ColorScheme = {
      backgroundColor: [],
      borderColor: [],
    };

    for (let i = 0; i < count; i++) {
      // Simple logic to alternate colors, modify as needed
      const red = Math.floor((Math.random() * 255) / 2 + 128); // /2 + 128 makes the colors brighter
      const green = Math.floor((Math.random() * 255) / 2 + 128);
      const blue = Math.floor((Math.random() * 255) / 2 + 128);
      colors.backgroundColor.push(`rgba(${red}, ${green}, ${blue}, 0.4)`);
      colors.borderColor.push(`rgba(${red}, ${green}, ${blue}, 1)`);
    }

    return colors;
  };

  const { backgroundColor, borderColor } = generateColors(labels.length);

  const data = {
    labels, // Instrument Names
    datasets: [
      {
        label: "Number of Trades Placed",
        data: dataValues, // Trades per Instrument
        backgroundColor,
        borderColor,
        borderWidth: 2,
      },
    ],
  };

  return (
    <Bar
      data={data}
      options={{
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: "rgba(256, 256, 256, 1)",
            },
            grid: {
              color: "rgba(256, 256, 256, 1)",
              drawTicks: false,
            },
          },
          x: {
            ticks: {
              color: "rgba(256, 256, 256, 1)",
            },
            grid: {
              color: "rgba(256, 256, 256, 1)",
              drawOnChartArea: false,
              drawTicks: false,
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              color: "rgba(256, 256, 256, 1)",
            },
          },
          title: {
            display: true,
            color: "rgba(256, 256, 256, 1)",
            text: "Asset Class Breakdown",
          },
        },
        maintainAspectRatio: false,
        responsive: true,
        backgroundColor: "rgba(0, 255, 0, 0.1)",
      }}
    />
  );
};

export default MyChart;
