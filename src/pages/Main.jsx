import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
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
  BarElement,
  Title,
  Tooltip,
  Legend
);
import Tab from "../components/Tab";

import Header from "../components/Header";

import { ReactComponent as WatchIcon } from "../assets/icons/watch.svg";
import { ReactComponent as CaloriesIcon } from "../assets/icons/calories.svg";
import { ReactComponent as StepsIcon } from "../assets/icons/footsteps.svg";
import { ReactComponent as PlayIcon } from "../assets/icons/play.svg";
import { ReactComponent as BicycleIcon } from "../assets/icons/bicycle.svg";

const Main = () => {
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
            color: "#C3C3C3",
          },
          border: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            display: true,
            color: "#C3C3C3",
          },
          border: {
            display: false,
          },
        },
      },
    },
    data: {
      labels: ["t", "f", "s", "s", "m", "t", "w"],
      datasets: [
        {
          data: [2, 4, 6, 2, 10, 8, 4],
          borderRadius: 15,
          backgroundColor: [2, 4, 6, 2, 10, 8, 4].map((item) => {
            if (item < 5) {
              return "#ffffff";
            }
            return "#C3FF4D";
          }),
          barThickness: 20,
          categoryPercentage: 0.5,
        },
      ],
    },
  };

  const todayProgress = [
    {
      icon: WatchIcon,
      title: "27",
      subTitle: "mins",
      label: "Left Today",
      progress: 80,
    },
    {
      icon: CaloriesIcon,
      title: "866",
      label: "Calories burn",
      progress: 30,
    },
    {
      icon: StepsIcon,
      title: "7579",
      label: "Steps",
      progress: "60",
    },
  ];

  return (
    <>
      <div>
        <Header showBackButton={false} />
        <div className="px-4 py-1">
          {/* scrollable cards */}
          <div className="scrolling-wrapper flex gap-4 flex-nowrap overflow-x-auto py-2">
            {todayProgress.map((progress) => (
              <div
                key={progress.title + progress?.subTitle}
                className="w-1/2 min-h-30 bg-white rounded-lg card flex p-3 py-4 items-center gap-x-4"
              >
                {/* icon from progress.icon*/}
                <progress.icon className="w-7 h-7 fill-primary" />

                <div className=" flex-1 flex flex-col gap-y-2">
                  <div className="flex items-baseline gap-x-1">
                    <h2 className="font-bold text-lg m-0">{progress.title}</h2>
                    {progress.subTitle && (
                      <p className="text-xs font-light text-gray-700">
                        {progress.subTitle}
                      </p>
                    )}
                  </div>
                  <p className="text-xs font-light text-gray-700">
                    {progress.label}
                  </p>
                  {/* progress bar */}
                  <div className="bg-gray-200 h-2 rounded-full">
                    <div
                      className={`bg-secondary w-[50%] h-2 rounded-full`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}

            {/* chart */}
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg m-0">Goal for week</h2>
              <p className="text-xs font-light text-gray-700">42 of 54</p>
            </div>

            <div className="bg-primary h-60 rounded-2xl items-center p-3">
              <Bar
                className={"!h-full"}
                data={barChart.data}
                options={barChart.options}
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg m-0">Trending Workouts</h2>
              <p className="text-xs font-light text-gray-700 underline">
                see all
              </p>
            </div>

            <div className="flex flex-col gap-y-4">
              {[0, 0].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl flex items-center bg-white p-6"
                >
                  <BicycleIcon className="fill-primary mr-3" />
                  <p className="text-sm text-gray-700">Muscle Builder</p>
                  <button className="inline-flex items-center justify-center ml-auto border-2 border-secondary text-secondary rounded-full w-8 h-8 text-center">
                    <PlayIcon className="fill-secondary w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Tab />
    </>
  );
};

export default Main;
