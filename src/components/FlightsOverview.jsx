import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import MyFlight from "./MyFlight";
import { local } from "../utils/api";

const FlightsOverview = () => {
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);
  // State to store the currently selected sorting option
  const [selectedOption, setSelectedOption] = useState("Recommended");
  // State to store flight data retrieved from the API
  const [myflights, setMyFlights] = useState([]);
  // Ref to track the dropdown element for handling outside clicks
  const dropdownRef = useRef(null);

  // Effect to fetch flight data from the API when the component mounts
  useEffect(() => {
    local
      .get("/myflights") // API call to retrieve "my flights" data
      .then((res) => setMyFlights(res.data)) // Store fetched data in state
      .catch((err) => console.log(err.message)); // Log any error messages
  }, []);

  // Toggle dropdown open/close state
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Handle selecting an option from the dropdown
  const handleOptionSelect = (option) => {
    setSelectedOption(option); // Set the selected option
    setIsOpen(false); // Close the dropdown after selecting
  };

  // Effect to handle clicks outside the dropdown, to close it when clicked elsewhere
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close the dropdown if the click is outside of it
      }
    };
    document.addEventListener("mousedown", handleOutsideClick); // Add event listener for detecting clicks outside

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick); // Clean up the event listener on unmount
    };
  }, []);

  // List of sorting options for the dropdown
  const options = [
    "Lowest Fare",
    "Fastest Flight",
    "Best Rated",
    "Direct Flights",
    "Flexible Dates",
  ];

  return (
    <div className="space-y-4 mx-4 flex-1 overflow-scroll">
      {/* Header section for sorting options and flight information */}
      <div className="flex justify-between items-center mx-8 my-4">
        <div className="text-black flex items-center">
          <span className="text-gray-500">Sort by:</span>
          <div className="relative ml-4 cursor-pointer" ref={dropdownRef}>
            {/* Dropdown toggle */}
            <span onClick={toggleDropdown} className="flex items-center">
              {selectedOption} {/* Display selected option */}
              <FaChevronDown className="ml-2 text-xs" />
            </span>
            {isOpen && (
              <div className="absolute mt-1 w-48 bg-white border text-black border-gray-300 rounded shadow-lg z-10">
                {/* Dropdown options */}
                <ul className="py-2">
                  {options.map((option) => (
                    <li
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleOptionSelect(option)} // Set the option on click
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* Information section showing the average fare */}
        <div className="text-gray-500 flex items-center">
          <div className="flex items-center justify-center bg-transparent rounded-full border-2 border-blue-500 w-5 h-5 mr-1">
            <span className="text-blue-500 text-xs font-bold" aria-label="Info">
              i {/* Info icon */}
            </span>
          </div>
          <span className="ml-2">Avg Fare: $225</span>{" "}
          {/* Display average fare */}
        </div>
      </div>

      {/* Section to render list of flights */}
      <div>
        {myflights &&
          myflights.map((item) => (
            <MyFlight key={item.id} data={item} /> // Render each flight using the MyFlight component
          ))}
      </div>
    </div>
  );
};

export default FlightsOverview;
