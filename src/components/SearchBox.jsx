import React from "react";
import { IoIosAirplane, IoMdCalendar } from "react-icons/io";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";

const SearchBox = () => {
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
      <main className=" flex gap-2 max-lg:flex-col" >
        <div className=" flex flex-row gap-1">
          <div className=" flex flex-row border gap-2 items-center rounded-s-full overflow-hidden pl-2 max-w-44">
            <MdFlightTakeoff color="#4B0097" />
            <input className="outline-none max-w-36 max-sm:max-w-28 " type="text" />
          </div>
          <div className=" flex flex-row border gap-2 items-center rounded-e-full overflow-hidden pl-2 max-w-44">
            <MdFlightLand color="#4B0097" />
            <input className="outline-none max-w-36 max-sm:max-w-28" type="text" />
          </div>
        </div>
        <div className=" flex flex-row gap-1">
          <div className=" flex flex-row border gap-2 items-center rounded-s-full overflow-hidden pl-2 max-w-44">
            <IoMdCalendar color="#4B0097" />
            <input className="outline-none max-w-36 max-sm:max-w-28 text-center" type="date" />
          </div>
          <div className=" flex flex-row border gap-2 items-center rounded-e-full overflow-hidden pl-2 max-w-44">
            <IoMdCalendar color="#4B0097" />
            <input className="outline-none max-w-36 max-sm:max-w-28 text-center" type="date" />
          </div>
        </div>
      </main>
      <button className=" bg-[#4B0097] text-white text-sm p-2 rounded-lg w-fit">
        Show Flights
      </button>
    </div>
  );
};

export default SearchBox;
