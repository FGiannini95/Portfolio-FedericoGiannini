import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Temperature and Humidity",
    },
  },
  scales: {
    x: {
      type: 'category',
      position: 'bottom',
      ticks: {
        autoSkip: true,
        maxTicksLimit: 5,  // Ajusta según tus necesidades
      },
    },
    y: {
      beginAtZero: true,
    },
  },
};

export const Graphic = ({ datos }) => {
  const [datosFinale, setDatosFinale] = useState();

  useEffect(() => {
    if (datos) {
      setDatosFinale(
        datos.list.filter((elem) => {
          return elem.dt_txt.split(" ")[1] === "12:00:00";
        })
      );
    }
  }, [datos]);

  const labels = datosFinale?.map((e) => e.dt_txt.split(" ")[0]);

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: datosFinale?.map((e) => e.main.temp),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Humidity",
        data: datosFinale?.map((e) => e.main.humidity),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} className="grafico p-3" />;

};
