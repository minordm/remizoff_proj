
import {
  Chart as ChartJS,
  TimeScale, // time scale
  LinearScale, // y
  PointElement, // всплывающая подсказка для элемента
  LineElement,
  Title, // это не обязательно
  Tooltip,
  Legend
} from "chart.js";
import zoomPlugin from 'chartjs-plugin-zoom';

import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin // регистрируем плагин
);

const lineChartData = {
  labels: [
    new Date(2023, 9, 1, 8, 0, 0),
    new Date(2023, 9, 1, 12, 0, 0),
    new Date(2023, 9, 1, 16, 0, 0),
    new Date(2023, 9, 1, 20, 0, 0),
    new Date(2023, 9, 2, 0, 0, 0),
    new Date(2023, 9, 2, 4, 0, 0), // 6

    new Date(2023, 9, 2, 8, 0, 0),
    new Date(2023, 9, 2, 12, 0, 0),
    new Date(2023, 9, 2, 16, 0, 0),
    new Date(2023, 9, 2, 20, 0, 0),
    new Date(2023, 9, 3, 0, 0, 0),
    new Date(2023, 9, 3, 4, 0, 0), // 12
    
    new Date(2023, 9, 3, 8, 0, 0),
    new Date(2023, 9, 3, 12, 0, 0),
    new Date(2023, 9, 3, 16, 0, 0),
    new Date(2023, 9, 3, 20, 0, 0),
    new Date(2023, 9, 4, 0, 0, 0),
    new Date(2023, 9, 4, 4, 0, 0), // 18
    
    new Date(2023, 9, 4, 8, 0, 0),
    new Date(2023, 9, 4, 12, 0, 0),
    new Date(2023, 9, 4, 16, 0, 0),
    new Date(2023, 9, 4, 20, 0, 0),
    new Date(2023, 9, 5, 0, 0, 0),
    new Date(2023, 9, 5, 4, 0, 0), // 24
    
    new Date(2023, 9, 5, 8, 0, 0),
    new Date(2023, 9, 5, 12, 0, 0),
    new Date(2023, 9, 5, 16, 0, 0),
    new Date(2023, 9, 5, 20, 0, 0),
    new Date(2023, 9, 6, 0, 0, 0),
    new Date(2023, 9, 6, 4, 0, 0), // 30
    
    new Date(2023, 9, 6, 8, 0, 0),
    new Date(2023, 9, 6, 12, 0, 0),
    new Date(2023, 9, 6, 16, 0, 0),
    new Date(2023, 9, 6, 20, 0, 0),
    new Date(2023, 9, 7, 0, 0, 0),
    new Date(2023, 9, 7, 4, 0, 0), // 36
    
    new Date(2023, 9, 7, 8, 0, 0),
    new Date(2023, 9, 7, 12, 0, 0),
    new Date(2023, 9, 7, 16, 0, 0),
    new Date(2023, 9, 7, 20, 0, 0),
    new Date(2023, 9, 8, 0, 0, 0),
    new Date(2023, 9, 8, 4, 0, 0), // 42
    
    new Date(2023, 9, 8, 8, 0, 0),
    new Date(2023, 9, 8, 12, 0, 0),
    new Date(2023, 9, 8, 16, 0, 0),
    new Date(2023, 9, 8, 20, 0, 0),
    new Date(2023, 9, 9, 0, 0, 0),
    new Date(2023, 9, 9, 4, 0, 0), // 48

  ],
  datasets: [
    {
      label: "Наличие воды, т",
      data: [
        1.44, 1.45, 1.46, 1.445, 1.45, 1.445, // 6

        1.43, 1.395, 1.41, 1.455, 1.425, 1.41, // 12

        1.418, 1.448, 1.44, 1.45, 1.46, 1.445, // 

        1.45, 1.445, 1.43, 1.395, 1.41, 1.455,

        1.425, 1.41, 1.44, 1.45, 1.46, 1.445, 
        
        1.45, 1.445, 1.43, 1.395, 1.41, 1.455, 
        
        1.425, 1.41, 1.418, 1.448, 1.44, 1.45, 
        
        1.46, 1.445, 1.45, 1.445, 1.43, 1.395,
      ],
      borderColor: "rgb(86, 160, 207)",
    },
  ],
};

const options = {
  scales: {
    x: {
      type: "time",
      time: {
        unit: 'hour',

        displayFormats: {
          hour: "HH:hh:ss",
        },
      },
      ticks: {
        maxRotation: 0,
        minRotation: 0,
      },
    },
  },
  plugins: {
    zoom: {
      pan: {
        enabled: true,
        mode: 'x',
      },
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true
        },
        mode: 'x'
      },
    }
  }
};

export const LineGraph = () => {
  return <Line data={lineChartData} options={options} />;
};
