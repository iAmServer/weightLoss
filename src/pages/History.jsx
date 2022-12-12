import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import Tab from "../components/Tab";
import Header from "../components/Header";
import { ReactComponent as PlayIcon } from "../assets/icons/play.svg";

const Main = () => {
  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const lineChart = {
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            display: true,
          },
          border: {
            display: false,
          },
        },
        y: {
          display: false,
        },
      },
    },
    data: {
      labels: ["t", "f", "s", "s", "m", "t", "w"],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: "#C3FF4D",
          backgroundColor: "#7B66FF",
        },
      ],
    },
  };

  const barChart = {
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            display: true,
          },
          border: {
            display: false,
          },
        },
        y: {
          display: false,
        },
      },
    },
    data: {
      labels: ["t", "f", "s", "s", "m", "t", "w"],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          borderRadius: 15,
          backgroundColor: [65, 59, 80, 81, 56, 55, 40].map((item) => {
            if (item < 60) {
              return "rgba(123, 102, 255, 0.2)";
            }
            return "#7B66FF";
          }),
          barThickness: 5,
          categoryPercentage: 0.5,
        },
      ],
    },
  };

  return (
    <>
      <div>
        <Header pageTitle="History" showBackButton={false} showButton={true} />

        <div className="px-4 py-1 flex flex-col gap-y-6">
          <h2 className="font-bold text-lg m-0">{formattedDate}</h2>

          <div className=" bg-white flex h-[150px] px-6 py-5 rounded-xl gap-x-6">
            <div className="flex flex-col justify-between">
              <p className="text-sm text-gray-700">Weight</p>
              <h2 className="font-bold text-2xl m-0">
                52,3{" "}
                <span className="text-sm font-light text-gray-700">kg</span>
              </h2>
            </div>
            <Line
              className="flex-1"
              options={lineChart.options}
              data={lineChart.data}
            />
          </div>

          <div className="w-full card bg-white flex flex-col justify-between h-[150px] p-3 py-5 rounded-xl">
            <div className="flex flex-col gap-y-1">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">BMI</p>
                <div className="flex items-center">
                  <p className="text-sm text-gray-500">17.3</p>
                  <PlayIcon className="ml-1 h-3 fill-primary rotate-90" />
                </div>
              </div>

              {/* progress bar splitted into 3 columns */}
              <div className="grid grid-cols-3 gap-x-1 mt-3">
                <div className="bg-secondary bg-opacity-20 h-2 rounded-full">
                  <div
                    className={`bg-secondary w-[10%] h-2 rounded-full`}
                  ></div>
                </div>
                <div className="bg-primary bg-opacity-10 h-2 rounded-full">
                  <div className={`bg-secondary w-[0%] h-2 rounded-full`}></div>
                </div>
                <div className="bg-primary bg-opacity-30 h-2 rounded-full">
                  <div className={`bg-secondary w-[0%] h-2 rounded-full`}></div>
                </div>
              </div>

              <div className="grid grid-cols-3 justify-center">
                <p className="text-xs text-gray-500 col-span-2 text-center">
                  18,5
                </p>
                <p className="text-xs text-gray-500">25</p>
              </div>
            </div>

            {/* keys for progress bar */}
            <div className="flex flex-row gap-x-3">
              <div className="flex items-center gap-x-1">
                <div className="h-2 w-2 rounded-full bg-green-200"></div>
                <span className="font-light text-xs text-gray-500">Low</span>
              </div>
              <div className="flex items-center gap-x-1">
                <div className="h-2 w-2 rounded-full bg-purple-200"></div>
                <span className="font-light text-xs text-gray-500">Normal</span>
              </div>
              <div className="flex items-center gap-x-1">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="font-light text-xs text-gray-500">High</span>
              </div>
            </div>
          </div>

          <div className="scrolling-wrapper flex gap-4 flex-nowrap overflow-x-auto py-2">
            <div className="w-full card bg-white flex h-[150px] px-6 py-5 rounded-xl gap-x-6">
              <div className="flex flex-col justify-between">
                <p className="text-[10px] text-gray-700">Blood Pressure</p>
                <h2 className="font-bold text-2xl m-0">120/80</h2>
              </div>
              <Bar
                className="flex-1"
                options={barChart.options}
                data={{
                  ...barChart.data,
                  datasets: [
                    {
                      ...barChart.data.datasets[0],
                      data: [90, 77, 40, 81, 56, 55, 20],
                      backgroundColor: [90, 77, 40, 81, 56, 55, 20].map(
                        (item) => {
                          if (item < 60) {
                            return "rgba(195, 255, 77, 0.4)";
                          }
                          return "#C3FF4D";
                        }
                      ),
                    },
                  ],
                }}
              />
            </div>
            <div className="w-full card bg-white flex h-[150px] px-6 py-5 rounded-xl gap-x-6">
              <div className="flex flex-col justify-between">
                <p className="text-[10px] text-gray-700">Sleep</p>
                <h2 className="font-bold text-2xl m-0">
                  6
                  <span className="text-sm font-light text-gray-700 mr-1">
                    h
                  </span>
                  30<span className="text-sm font-light text-gray-700">m</span>
                </h2>
              </div>
              <Bar
                className="flex-1"
                options={barChart.options}
                data={barChart.data}
              />
            </div>
          </div>
        </div>
      </div>

      <Tab />
    </>
  );
};

export default Main;
