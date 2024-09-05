import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import React, { useState } from "react";
import "./Nav.css";

const Navbar = ({ changeView, getByName }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div id="nav" className="fixed top-0 w-full z-10">
      <div className="navi flex justify-between items-center p-6 text-[16px] md:text-[20px]">
        <div className="flex flex-1 justify-center align-center">
          <h1>Fragrance World</h1>
        </div>
        <div className="hidden md:flex flex-1 space-x-7">
          <button
            className="btnss"
            onClick={() => {
              changeView("all");
              handleItemClick(1);
            }}
          >
            Home
          </button>
          <button
            className="btnss"
            onClick={() => {
              changeView("contact");
              handleItemClick(1);
            }}
          >
            Contact
          </button>
        </div>
        <div className="flex flex-1 flex-row gap-8 justify-end">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here .."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="outline-none placeholder:text-sm bg-transparent"
              style={{ width: "200px" }}
            />
            <button
              onClick={() => {
                getByName(searchQuery);
              }}
              className="absolute right-[0] bottom-[0] btn_search"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="cursor-pointer"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 
                  0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"
                ></path>
              </svg>
            </button>
          </div>

          <a href="">
            <FavoriteBorderIcon />
          </a>
          <a href="">
            <ShoppingBagIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
