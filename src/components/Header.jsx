import React from "react";
import { ReactComponent as BackIcon } from "../assets/icons/back-arrow.svg";
import { ReactComponent as RefreshIcon } from "../assets/icons/refresh.svg";
import { Link } from "react-router-dom";

const Header = ({
  pageTitle = "My Activity",
  showBackButton = true,
  backButtonPath = "/",
  showButton = false,
  onButtonClick,
  icon,
}) => {
  //  when refresh button is clicked rotate icon

  return (
    <header className="flex justify-between px-4 py-6 items-center ">
      <div className="flex items-center gap-x-4">
        {showBackButton && (
          <Link to={backButtonPath}>
            <BackIcon className="w-7" />
          </Link>
        )}

        <h1 className="text-black font-body font-semibold text-xl">
          {pageTitle}
        </h1>
      </div>

      {/* user image  */}
      {!showButton ? (
        <div className="flex items-center">
          <img
            src="https://picsum.photos/id/375/150/150"
            alt="user"
            className="w-11 h-11 rounded-full"
          />
        </div>
      ) : (
        <button
          onClick={onButtonClick}
          className={
            "flex items-center justify-center w-11 h-11 rounded-full outline-none"
          }
        >
          {icon ? icon : <RefreshIcon className="w-6" />}
        </button>
      )}
    </header>
  );
};

export default Header;
