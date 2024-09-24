import React from "react";
import HeaderRight from "../components/HeaderRight";
import SearchBox from "../components/SearchBox";
import Options from "../components/Options";
import Ads from "../components/Ads";
import FlightCard from "../components/FlightCard";
import { useSelector } from "react-redux";
import Logo from "../components/Logo";

const MainPage = () => {
  const { flights, airlines, aircraftTypes, destinations } = useSelector(
    (store) => store.flight
  );

  return (
    <div className=" bg-[#F6F4F8] p-4 h-full w-full flex flex-col shadow-xl rounded-lg max-lg:overflow-y-scroll ">
      <header className="flex flex-row justify-between mb-3">
        <Logo />

        <HeaderRight />
      </header>
      <main className=" flex flex-row flex-1 gap-4 max-md:flex-col overflow-hidden max-md:overflow-scroll">
        <div className=" flex-1 flex flex-col gap-3  ">
          <div className=" w-[100%] ">
            <SearchBox />
          </div>
          <div className=" grid grid-rows-3 grid-flow-col gap-3 max-lg:flex max-lg:flex-col-reverse overflow-scroll max-lg:flex-1 max-lg:justify-end">
            <div className="row-span-3 col-span-3 gap-3 flex flex-col  max-lg:h-44 max-lg:flex-1  overflow-scroll">
              {flights &&
                flights.map((flight) => (
                  <FlightCard
                    key={flight.id}
                    flight={flight}
                    airline={airlines}
                    aircraftTypes={aircraftTypes}
                    destinations={destinations}
                    from={flight.prefixICAO}
                    to={flight.route.destinations[0]}
                  />
                ))}
            </div>
            <div className="  row-span-3 col-span-1 overflow-scroll lg:min-w-48 max-lg:h-44">
              <Options airlines={airlines} />
            </div>
          </div>
        </div>
        <div className=" max-md:h-52 max-md:w-[100%] max-lg:w-40 lg:w-52">
          <Ads />
        </div>
      </main>
    </div>
  );
};

export default MainPage;
