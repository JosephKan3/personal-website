import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Register the necessary chart components for a Doughnut chart
Chart.register(ArcElement, Tooltip, Legend, Title);

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
  const generateColors = (labels: string[]) => {
    const count = labels.length;
    const colors: ColorScheme = {
      backgroundColor: [],
      borderColor: [],
    };

    // OIL COLOR EXCEPTION FOR FUN
    const oilIndex = labels.findIndex((currString: string) => {
      return currString === "";
      // return currString === "West Texas Oil"; // Cant find a good design for this, so whatever
    });

    for (let i = 0; i < count; i++) {
      // Simple logic to alternate colors
      const red = Math.floor((Math.random() * 255) / 2 + 128);
      const green = Math.floor((Math.random() * 255) / 2 + 128);
      const blue = Math.floor((Math.random() * 255) / 2 + 128);

      colors.backgroundColor.push(
        i == oilIndex
          ? `rgba(20, 20, 20, 0.5)`
          : `rgba(${red}, ${green}, ${blue}, 0.5)`
      );
      colors.borderColor.push(
        i == oilIndex
          ? `rgba(10, 10, 10, 1)`
          : `rgba(${red}, ${green}, ${blue}, 1)`
      );
    }

    return colors;
  };

  const { backgroundColor, borderColor } = generateColors(labels);

  const data = {
    labels, // Categories
    datasets: [
      {
        label: "Number of Trades Placed",
        data: dataValues, // Values for each category
        backgroundColor,
        borderColor,
        borderWidth: 1,
      },
    ],
  };

  return (
    <Doughnut
      data={data}
      options={{
        maintainAspectRatio: false,
        responsive: true,
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
            text: "Asset Class Breakdown",
            font: {
              size: 18,
              family:
                "'Montserrat', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            },
          },
        },
      }}
    />
  );
};

export default MyChart;
