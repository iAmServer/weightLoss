import Header from "../components/Header";
import { useState } from "react";
import { ReactComponent as SettingIcon } from "../assets/icons/setting.svg";
import { ReactComponent as SettingsIcon } from "../assets/icons/settings.svg";
import { useNavigate } from "react-router";

const Activity = () => {
  const navigateTo = useNavigate();

  const [inp, setIpu] = useState({
    age: 20,
    weight: 52.3,
  });

  const [gauge, setGauge] = useState({
    value: 0,
    max: 100,
    min: 0,
    radius: 150,
    stroke: 20,
    color: "#00ff00",
  });

  return (
    <div className="relative">
      <div className="absolute h-[200px] w-full bg-gray-50 top-0 right-0 left-0 rounded-b-3xl"></div>
      <div className={"absolute w-full"}>
        <Header
          pageTitle="Add Weight"
          backButtonPath="/"
          showBackButton={true}
          showButton={true}
          icon={<SettingsIcon className="w-6" />}
        />

        <div className="px-4 py-1">
          <div className="my-6 flex justify-center">
            <div className="trapezoid ">
              <h1 className="font-extrabold z-10 text-[64px] text-white">
                52,3
              </h1>
            </div>
          </div>
        </div>

        <div className="px-4 py-1">
          <div className="grid grid-cols-2 gap-x-4 my-6 mt-[100px]">
            <label>
              <input name="gender" type="radio" className="hidden g-input" />
              <div className="flex bg-white h-20 rounded-2xl justify-center items-center gender cursor-pointer">
                <p className="text-xl font-bold text-gray-600">Male</p>
              </div>
            </label>
            <label>
              <input name="gender" type="radio" className="hidden g-input" />
              <div className="flex bg-white h-20 rounded-2xl justify-center items-center gender cursor-pointer">
                <p className="text-xl font-bold text-gray-600">Female</p>
              </div>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-x-4 my-6">
            <div className="flex flex-col bg-white h-28 rounded-2xl p-4 gap-y-5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-light text-gray-600">Age</label>
                <SettingIcon className="h-5 fill-primary cursor-pointer" />
              </div>
              <input
                type="text"
                className={
                  "text-4xl font-bold text-gray-600 w-full text-center outline-none border-none focus:outline-none place-self-end ring-0"
                }
                maxLength={3}
                value={inp.age}
                onChange={(e) => {
                  //   empty string set 0 and onfocus set empty string
                  if (e.target.value === "") {
                    setIpu({ ...inp, age: 0 });
                  } else if (e.target.value.match(/^[0-9]*$/)) {
                    setIpu({ ...inp, age: e.target.value });
                  }
                }}
              />
            </div>

            <div className="flex flex-col bg-white h-28 rounded-2xl p-4 gap-y-5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-light text-gray-600">
                  Weight
                </label>
                <SettingIcon className="h-5 fill-primary" />
              </div>
              <input
                type="text"
                className={
                  "text-4xl font-bold text-gray-600 w-full text-center outline-none border-none place-self-end"
                }
                maxLength={3}
                value={inp.weight}
                onChange={(e) => {
                  //   empty string set 0 and onfocus set empty string
                  if (e.target.value === "") {
                    setIpu({ ...inp, weight: 0 });
                  } else if (e.target.value.match(/^[0-9]*$/)) {
                    setIpu({ ...inp, weight: e.target.value });
                  }
                }}
              />
            </div>
          </div>

          <div className="flex my-6 w-full">
            <button
              onClick={() => navigateTo("/")}
              className="bg-primary w-2/3 text-white font-bold text-xl py-3 px-8 rounded-2xl mx-auto"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// import React from 'react';
// import './GaugeInput.css';

const GaugeInput = (props) => {
  return (
    <div className="gauge-input">
      <label htmlFor="">
        <input
          type="range"
          min={props.min}
          max={props.max}
          value={props.value}
          onChange={props.onChange}
        />

        <div className="ticks">
          {Array(props.max - props.min + 1)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                className="tick"
                style={{
                  transform: `rotate(${
                    (i / (props.max - props.min)) * 270 - 45
                  }deg)`,
                }}
              ></div>
            ))}
        </div>
      </label>
    </div>
  );
};

export default Activity;
