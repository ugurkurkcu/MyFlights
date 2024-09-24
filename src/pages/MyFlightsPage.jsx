import React from "react";
import FlightsOverview from "../components/FlightsOverview";
import MyFlightsHeader from "../components/MyFlightsHeader";

const MyFlightsPage = () => {
  return (
    <div className=" bg-[#E5E5E6] rounded-xl overflow-hidden shadow-xl flex flex-col flex-1">
      <MyFlightsHeader />
      <FlightsOverview />
    </div>
  );
};

export default MyFlightsPage;
