import React, { useEffect, useState } from "react";
import { IoIosAirplane, IoMdCalendar } from "react-icons/io";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import Select from "./Select";
import { useDispatch } from "react-redux";
import {
  addFilter,
  setDepartureEndDate,
  setDepartureStartDate,
} from "../store/flightSlice";

const SearchBox = ({ destTo, destFrom }) => {
  // State to store the selected departure and arrival destinations
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const dispatch = useDispatch(); // Redux dispatch function to update the store

  // Handle start date selection (arrival date)
  const handleArrival = (e) => {
    // Dispatch selected date to Redux store as the departure start date
    dispatch(
      setDepartureStartDate(new Date(e.target.value).toLocaleDateString())
    );
  };

  // Handle end date selection (departure date)
  const handleDeparture = (e) => {
    // Dispatch selected date to Redux store as the departure end date
    dispatch(
      setDepartureEndDate(new Date(e.target.value).toLocaleDateString())
    );
  };

  // Effect to update the Redux store with the selected 'from' and 'to' destinations
  useEffect(() => {
    dispatch(addFilter([from, to])); // Dispatch the selected destinations to be used for filtering
  }, [from, to]);

  return (
    <div className=" bg-white h-full rounded-lg flex flex-col gap-2 p-3">
      <header className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <IoIosAirplane className="h-5 w-5" />
          <h2 className="text-sm font-bold">BOOK YOUR FLIGHT</h2>
        </div>
        <div className="rounded-full overflow-hidden">
          {/* Buttons to toggle between Round Trip and One Way */}
          <button className="bg-[#4B0097] text-white text-xs p-2 w-24">
            Round Trip
          </button>
          <button className="bg-[#E6E0EB] text-[#4B0097] text-xs p-2 w-24">
            One Way
          </button>
        </div>
      </header>

      {/* Form for selecting departure/arrival locations and dates */}
      <form className="flex gap-2 max-lg:flex-col">
        {/* From/To Select Fields */}
        <div className="flex flex-row gap-1">
          <div className="flex flex-row border gap-2 items-center rounded-s-full overflow-hidden pl-2 max-w-44">
            <MdFlightTakeoff color="#4B0097" /> {/* Icon for 'From' */}
            {/* Select for 'From' destination */}
            <Select
              name={"From"}
              options={destTo}
              handleChange={async (e) => setFrom(await e.target.value)} // Set the selected 'from' destination
            />
          </div>
          <div className="flex flex-row border gap-2 items-center rounded-e-full overflow-hidden pl-2 max-w-44">
            <MdFlightLand color="#4B0097" /> {/* Icon for 'To' */}
            {/* Select for 'To' destination */}
            <Select
              name={"To"}
              options={destFrom}
              handleChange={async (e) => setTo(await e.target.value)} // Set the selected 'to' destination
            />
          </div>
        </div>

        {/* Date Pickers for Arrival and Departure */}
        <div className="flex flex-row gap-1">
          <div className="flex flex-row border gap-2 items-center rounded-s-full overflow-hidden pl-2 max-w-44">
            <IoMdCalendar color="#4B0097" /> {/* Icon for date */}
            <input
              className="outline-none max-w-36 max-sm:max-w-28 text-center"
              type="date"
              onChange={handleArrival} // Handle arrival date selection
            />
          </div>
          <div className="flex flex-row border gap-2 items-center rounded-e-full overflow-hidden pl-2 max-w-44">
            <IoMdCalendar color="#4B0097" /> {/* Icon for date */}
            <input
              className="outline-none max-w-36 max-sm:max-w-28 text-center"
              type="date"
              onChange={handleDeparture} // Handle departure date selection
            />
          </div>
        </div>
      </form>

      {/* Reset button to reload the page and reset filters */}
      <button
        onClick={() => window.location.reload()} // Refreshes the page to reset filters
        className="bg-[#4B0097] text-white text-sm p-2 rounded-lg w-fit"
      >
        Reset Filter
      </button>
    </div>
  );
};

export default SearchBox;
