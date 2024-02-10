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
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
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

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default MyChart;
