import React from "react";
import { FaChevronDown } from "react-icons/fa";

const MyFlight = ({ data }) => {
  return (
    <div className="flex flex-row max-lg:flex-col max-lg:gap-4 items-center justify-between p-4 m-8 mb-10 bg-white rounded-lg shadow-md">
      
      {/* Left Section: Flight Information */}
      <div className="flex items-start w-full flex-col">
        
        {/* Flight time and airline logo */}
        <div className="flex items-center space-x-4 ">
          <img
            src="https://via.placeholder.com/40" // Replace with actual airline logo
            alt="Airline Logo"
            className="w-10 h-10 rounded-full"
          />
          {/* Display the flight time */}
          <div className="text-lg font-semibold">{data.time}</div>
        </div>

        {/* Flight details (airline number, duration, destination) */}
        <div className="flex space-x-24 max-lg:space-x-12 mt-2 max-lg:justify-around w-full">
          
          {/* Airline Number and Flight Details Button */}
          <div className="flex flex-col">
            <div className="text-sm text-gray-500">{data.airlineNumber}</div>
            <button className="text-xs text-blue-600 flex items-center space-x-1 rounded-md">
              <span className="">Flight Details</span> {/* Button to show flight details */}
              <FaChevronDown className="text-blue-600" />
            </button>
          </div>

          {/* Flight Duration */}
          <div className="flex flex-col">
            <div className="text-sm font-semibold">Nonstop</div> {/* Indicates that the flight is nonstop */}
            <div className="text-xs text-gray-500">{data.duration}</div> {/* Display the flight duration */}
          </div>

          {/* Flight Destination */}
          <div className="flex flex-col">
            <div className="text-sm font-semibold">{data.destination}</div> {/* Display the destination */}
            <div className="text-xs text-gray-500">{data.flightName}</div> {/* Display the flight name */}
          </div>
        </div>
      </div>

      {/* Right Section: Pricing for Different Classes */}
      <div className="flex flex-row space-x-4 w-full max-lg:justify-around">
        
        {/* Price for Main Class */}
        <div className="flex flex-col items-center justify-center border rounded shadow-sm w-20 h-24 space-y-2">
          <div className="text-lg font-semibold">${data.price}</div> {/* Display the price for Main class */}
          <div className="text-xs text-gray-500">Main</div> {/* Label for Main class */}
        </div>

        {/* Price for Comfort+ Class */}
        <div className="flex flex-col items-center justify-center border rounded shadow-sm w-20 h-24 space-y-2">
          <div className="text-lg font-semibold">${data.price + 82}</div> {/* Price for Comfort+ class */}
          <div className="text-xs text-gray-500">Comfort+</div> {/* Label for Comfort+ class */}
        </div>

        {/* Price for Delta One Class */}
        <div className="flex flex-col items-center justify-center border rounded shadow-sm w-20 h-24 space-y-2">
          <div className="text-lg font-semibold">${data.price + 124}</div> {/* Price for Delta One class */}
          <div className="text-xs text-gray-500">Delta One</div> {/* Label for Delta One class */}
        </div>
      </div>
    </div>
  );
};

export default MyFlight;