import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import MyFlight from "./MyFlight";
import { local } from "../utils/api";

const FlightsOverview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Recommended");
  const [myflights, setMyFlights] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    local
      .get("/myflights")
      .then((res) => setMyFlights(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const options = [
    "Lowest Fare",
    "Fastest Flight",
    "Best Rated",
    "Direct Flights",
    "Flexible Dates",
  ];

  return (
    <div className="space-y-4 mx-4 flex-1 overflow-scroll">
      <div className="flex justify-between items-center mx-8 my-4">
        <div className="text-black flex items-center">
          <span className="text-gray-500">Sort by:</span>
          <div className="relative ml-4 cursor-pointer" ref={dropdownRef}>
            <span onClick={toggleDropdown} className="flex items-center">
              {selectedOption}
              <FaChevronDown className="ml-2 text-xs" />
            </span>
            {isOpen && (
              <div className="absolute mt-1 w-48 bg-white border text-black border-gray-300 rounded shadow-lg z-10">
                <ul className="py-2">
                  {options.map((option) => (
                    <li
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="text-gray-500 flex items-center">
          <div className="flex items-center justify-center bg-transparent rounded-full border-2 border-blue-500 w-5 h-5 mr-1">
            <span className="text-blue-500 text-xs font-bold" aria-label="Info">
              i
            </span>
          </div>
          <span className="ml-2">Avg Fare: $225</span>
        </div>
      </div>
      <div>
        {myflights &&
          myflights.map((item) => <MyFlight key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default FlightsOverview;
