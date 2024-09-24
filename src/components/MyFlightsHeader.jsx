import React from "react";
import { FaChevronDown, FaStar } from "react-icons/fa";
import Logo from "./Logo";

const MyFlightsHeader = () => {
  return (
    <div className=" z-10 flex flex-row max-lg:flex-col max-xl:px-3 max-lg:gap-2 items-center pb-4 pt-4 px-10 border-gray-300 bg-white shadow-md justify-between">
      <div className=" flex flex-row gap-3 items-center">
        <Logo />
        <div className="flex space-x-2 p-2 rounded-lg">
          {["Times", "Stops", "Airlines", "Airports", "Amenities"].map(
            (filter, idx) => (
              <button
                key={idx}
                className="px-4 py-2 max-lg:px-1 max-lg:py-1 max-lg:text-xs border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-100"
              >
                {filter}
              </button>
            )
          )}

          <button className="px-4 py-2 max-lg:px-2 max-lg:py-0 text-blue-600 flex items-center space-x-0 rounded-md">
            <span className="text-sm max-lg:text-xs">Edit Search</span>
            <FaChevronDown className="text-blue-600" />
          </button>
        </div>
      </div>

      <div className="flex space-x-3 ">
        <div className="flex flex-col border-r border-gray-300 border-opacity-70 border-solid pr-4 group">
          <div className="text-xs transition-transform duration-300 transform group-hover:scale-110">
            <div className="flex">
              <FaStar className="mr-1 text-black" />
              <FaStar className="mr-1 text-black" />
              <FaStar className="mr-1 text-gray-300" />
            </div>
            <div className="flex">
              <FaStar className="mr-1 text-gray-300" />
              <FaStar className="mr-1 text-gray-300" />
              <FaStar className="mr-1 text-gray-300" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border-r border-gray-300 border-opacity-70 border-solid pr-4 group">
          <div className="text-xs transition-transform duration-300 transform group-hover:scale-110">
            <div className="flex">
              <FaStar className="mr-1 text-black" />
              <FaStar className="mr-1 text-black" />
              <FaStar className="mr-1 text-black" />
            </div>
            <div className="flex">
              <FaStar className="mr-1 text-gray-300" />
              <FaStar className="mr-1 text-gray-300" />
              <FaStar className="mr-1 text-gray-300" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border-r border-gray-300 border-opacity-70 border-solid pr-4 group">
          <div className="text-xs transition-transform duration-300 transform group-hover:scale-110">
            <div className="flex">
              <FaStar className="mr-1 text-black" />
              <FaStar className="mr-1 text-black" />
              <FaStar className="mr-1 text-black" />
            </div>
            <div className="flex">
              <FaStar className="mr-1 text-black" />
              <FaStar className="mr-1 text-gray-300" />
              <FaStar className="mr-1 text-gray-300" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border-r border-gray-300 border-opacity-70 border-solid pr-4 group">
          <div className="text-xs transition-transform duration-300 transform group-hover:scale-110">
            <div className="flex">
              <FaStar className="mr-1 text-black" />
              <FaStar className="mr-1 text-black" />
              <FaStar className="mr-1 text-black" />
            </div>
            <div className="flex">
              <FaStar className="mr-1 text-black" />
              <FaStar className="mr-1 text-black" />
              <FaStar className="mr-1 text-gray-300" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border-gray-300 border-opacity-70 border-solid pr-4 group">
          <div className="text-xs transition-transform duration-300 transform group-hover:scale-110">
            <div className="flex">
              <FaStar className="mr-1 text-black" />
              <FaStar className="mr-1 text-black" />
              <FaStar className="mr-1 text-black" />
            </div>
            <div className="flex">
              <FaStar className="mr-1 text-black" />
              <FaStar className="mr-1 text-black" />
              <FaStar className="mr-1 text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFlightsHeader;
