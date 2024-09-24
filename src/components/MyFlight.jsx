import React from "react";
import { FaChevronDown } from "react-icons/fa";

const MyFlight = ({ data }) => {
  return (
    <div className="flex flex-row max-lg:flex-col max-lg:gap-4 items-center justify-between p-4 m-8 bg-white rounded-lg shadow-md">
      <div className="flex items-start w-full flex-col">
        <div className="flex items-center space-x-4 ">
          <img
            src="https://via.placeholder.com/40" // Replace with actual airline logo
            alt="Airline Logo"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-lg font-semibold">{data.time}</div>
        </div>

        <div className="flex space-x-24 max-lg:space-x-12 mt-2 max-lg:justify-around w-full ">
          <div className="flex flex-col">
            <div className="text-sm text-gray-500">{data.airlineNumber}</div>
            <button className="text-xs text-blue-600 flex items-center space-x-1 rounded-md">
              <span className="">Flight Details</span>
              <FaChevronDown className="text-blue-600" />
            </button>
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-semibold">Nonstop</div>
            <div className="text-xs text-gray-500">{data.duration}</div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-semibold">{data.destination}</div>
            <div className="text-xs text-gray-500">{data.flightName}</div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-row space-x-4 w-full max-lg:justify-around
      "
      >
        <div className="flex flex-col items-center justify-center border rounded shadow-sm w-20 h-24 space-y-2">
          <div className="text-lg font-semibold">${data.price}</div>
          <div className="text-xs text-gray-500">Main</div>
        </div>
        <div className="flex flex-col items-center justify-center border rounded shadow-sm w-20 h-24 space-y-2">
          <div className="text-lg font-semibold">${data.price + 82}</div>
          <div className="text-xs text-gray-500">Comfort+</div>
        </div>
        <div className="flex flex-col items-center justify-center border rounded shadow-sm w-20 h-24 space-y-2">
          <div className="text-lg font-semibold">${data.price + 124}</div>
          <div className="text-xs text-gray-500">Delta One</div>
        </div>
      </div>
    </div>
  );
};

export default MyFlight;
