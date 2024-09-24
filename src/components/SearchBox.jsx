import React, { useEffect, useState } from "react";
import { IoIosAirplane, IoMdCalendar } from "react-icons/io";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import Select from "./Select";
import { useDispatch } from "react-redux";
import { addFilter, resetFilter, setDepartureEndDate, setDepartureStartDate } from "../store/flightSlice";

const SearchBox = ({ destTo, destFrom }) => {
  const [departure, setDeparture] = useState();
  const [arrival, setArrival] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const dispatch = useDispatch();

  const handleArrival = (e) => {
    dispatch(setDepartureStartDate(new Date(e.target.value).toLocaleDateString()))
  };
  const handleDeparture = (e) => {
    dispatch(setDepartureEndDate(new Date(e.target.value).toLocaleDateString()))
  };

  useEffect(() => {
    dispatch(addFilter([from, to]));
  }, [from, to]);

  return (
    <div className=" bg-white h-full rounded-lg flex flex-col gap-2 p-3">
      <header className=" flex flex-row items-center justify-between">
        <div className=" flex flex-row items-center gap-3">
          <IoIosAirplane className=" h-5 w-5" />
          <h2 className=" text-sm font-bold">BOOK YOUR FLIGHT</h2>
        </div>
        <div className=" rounded-full overflow-hidden">
          <button className=" bg-[#4B0097] text-white text-xs p-2 w-24">
            Round Trip
          </button>
          <button className=" bg-[#E6E0EB] text-[#4B0097] text-xs p-2 w-24">
            One Way
          </button>
        </div>
      </header>
      <form className=" flex gap-2 max-lg:flex-col">
        <div className=" flex flex-row gap-1">
          <div className=" flex flex-row border gap-2 items-center rounded-s-full overflow-hidden pl-2 max-w-44">
            <MdFlightTakeoff color="#4B0097" />
            <Select
              name={"From"}
              options={destTo}
              handleChange={async (e) => setFrom(await e.target.value)}
            />
          </div>
          <div className=" flex flex-row border gap-2 items-center rounded-e-full overflow-hidden pl-2 max-w-44">
            <MdFlightLand color="#4B0097" />
            <Select
              name={"To"}
              options={destFrom}
              handleChange={async (e) => setTo(await e.target.value)}
            />
          </div>
        </div>
        <div className=" flex flex-row gap-1">
          <div className=" flex flex-row border gap-2 items-center rounded-s-full overflow-hidden pl-2 max-w-44">
            <IoMdCalendar color="#4B0097" />
            <input
              className="outline-none max-w-36 max-sm:max-w-28 text-center"
              type="date"
              onChange={handleArrival}
            />
          </div>
          <div className=" flex flex-row border gap-2 items-center rounded-e-full overflow-hidden pl-2 max-w-44">
            <IoMdCalendar color="#4B0097" />
            <input
              className="outline-none max-w-36 max-sm:max-w-28 text-center"
              type="date"
              onChange={handleDeparture}
            />
          </div>
        </div>
      </form>
      <button
        onClick={() => window.location.reload()}
        className=" bg-[#4B0097] text-white text-sm p-2 rounded-lg w-fit"
      >
        Reset Filter
      </button>
    </div>
  );
};

export default SearchBox;
