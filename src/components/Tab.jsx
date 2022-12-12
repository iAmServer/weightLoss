import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as ChatIcon } from "../assets/icons/chat.svg";
import { ReactComponent as UserIcon } from "../assets/icons/user.svg";
import { ReactComponent as AddIcon } from "../assets/icons/add.svg";
import { ReactComponent as ActivityIcon } from "../assets/icons/act.svg";
import { ReactComponent as HeartIcon } from "../assets/icons/heartbeat.svg";
import { ReactComponent as BicycleIcon } from "../assets/icons/bicycle.svg";
import { ReactComponent as WatchIcon } from "../assets/icons/watch.svg";
import { ReactComponent as NoteIcon } from "../assets/icons/note.svg";

const Tab = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const items = [
    {
      name: "Add blood pressure",
      path: "",
      icon: <HeartIcon className="w-5 h-5 mx-auto" />,
    },
    {
      name: "Add weight management",
      path: "/activity",
      icon: <NoteIcon className="w-5 h-5 mx-auto" />,
    },
    {
      name: "Add activity",
      path: "",
      icon: <BicycleIcon className="w-5 h-5 mx-auto" />,
    },
    {
      name: "Track my workout",
      path: "",
      icon: <WatchIcon className="w-5 h-5 mx-auto stroke-1" />,
    },
  ];

  useEffect(() => {
    if (showDropdown) {
      setShowDropdown(false);
    }

    // click outside to close dropdown
    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest(".dropdown")) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 rounded-t-3xl ">
      <ul className="flex flex-row justify-center items-center gap-x-4 relative outline-none">
        <li
          className={
            "w-full block py-2 px-3 text-center transition duration-300 outline-none"
          }
        >
          <Link to="/">
            <HomeIcon
              className={`${
                location.pathname === "/"
                  ? " fill-primary"
                  : "fill-transparent stroke-gray-600"
              } w-5 h-5 mx-auto`}
            />
          </Link>
        </li>
        <li
          className={
            "w-full block  py-2 px-3 text-center transition duration-300"
          }
        >
          <Link to="/history">
            <ActivityIcon
              className={`${
                location.pathname === "/history"
                  ? " fill-primary "
                  : "fill-gray-500"
              } w-5 h-5 mx-auto`}
            />
          </Link>
        </li>
        <li
          className={
            "w-full !max-w-full inline-block  py-2 px-3 text-center transition duration-300 relative"
          }
        >
          <button
            className={`rounded-full w-16 h-16 bg-primary absolute -bottom-5  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center `}
            aria-haspopup="true"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <AddIcon
              className={`w-5 h-5 mx-auto stroke-white transition duration-500 ease-in-out ${
                showDropdown ? "rotate-45" : ""
              }`}
            />

            {showDropdown && (
              <div
                className={
                  "dropdown rounded-xl w-[300px] h-fit bg-white bottom-20 z-10 shadow-2xl p-6 "
                }
              >
                <ul className="text-start flex flex-col  gap-y-3">
                  {items.map((item) => (
                    <Link to={item.path} key={item.name}>
                      <li
                        className={
                          "w-full text-gray-700 py-4 px-3 hover:bg-primary hover:text-white transition duration-300 rounded-2xl cursor-pointer flex gap-x-3 items-center fill-primary hover:fill-white shadow-sm shadow-purple-50"
                        }
                      >
                        {item.icon}
                        <p className="flex-1 text-sm">{item.name}</p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </button>
        </li>
        <li
          className={
            "w-full block  py-2 px-3 text-center transition duration-300"
          }
        >
          <Link to="/history">
            <ChatIcon className="w-5 h-5 mx-auto" />
          </Link>
        </li>
        <li
          className={
            "w-full block  py-2 px-3 text-center transition duration-300"
          }
        >
          <Link to="/history">
            <UserIcon className="w-5 h-5 fill-transparent  stroke-gray-600 mx-auto" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Tab;
