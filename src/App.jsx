import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyFlightsPage from "./pages/MyFlightsPage";
import api from "./utils/api";
import { useDispatch } from "react-redux";
import {
  getAircraftTypes,
  getAirlines,
  getDestinations,
  getFlights,
} from "./store/flightSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
    dispatch(getAirlines());
    dispatch(getDestinations());
    dispatch(getAircraftTypes());
  }, []);

  return (
    <BrowserRouter>
      <div className=" h-screen w-screen p-8 bg-[#E6DBFF] flex max-sm:p-4">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/myflights" element={<MyFlightsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
