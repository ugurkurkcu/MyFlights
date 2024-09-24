import React, { useEffect, useState } from "react";
import HeaderRight from "../components/HeaderRight";
import SearchBox from "../components/SearchBox";
import Options from "../components/Options";
import Ads from "../components/Ads";
import FlightCard from "../components/FlightCard";
import { useSelector } from "react-redux";
import Logo from "../components/Logo";

const MainPage = () => {
  // State for storing destination to and from
  const [destTo, setDestTo] = useState();
  const [destFrom, setDestFrom] = useState();
  // State for storing the filtered list of flights
  const [filteredFlights, setFilteredFlights] = useState();
  // State for storing filter parameters (used for filtering flights)
  const [params, setParams] = useState();

  // Retrieve flight-related data from Redux store
  const {
    flights,
    airlines,
    aircraftTypes,
    destinations,
    departureTimeStart,
    departureTimeEnd,
  } = useSelector((store) => store.flight);
  // Retrieve filter parameters from Redux store
  const { filterParams } = useSelector((store) => store.flight);

  // Function to extract destination locations from flight data
  const getDestinations = async () => {
    const to = await flights.map((i) => {
      const dest = i.route?.destinations[0]; // Get the first destination in the route
      return dest;
    });

    const from = await flights.map((i) => {
      const dest = i.route?.destinations[0]; // Get the first destination in the route
      return dest;
    });

    // Set the destinations to state
    setDestFrom(await from);
    setDestTo(await to);
  };

  // Function to filter flights based on the filterParams and departure time range
  const filterFlights = async () => {
    try {
      const arr = flights.filter((flight) => {
        // Convert departure time range to JavaScript Date objects
        const startDate = new Date(
          departureTimeStart.split(".").reverse().join("-")
        ); // Parse 'DD.MM.YYYY' to 'YYYY-MM-DD' for Date()
        const endDate = new Date(
          departureTimeEnd.split(".").reverse().join("-")
        );
        endDate.setHours(23, 59, 59, 999); // Include the full end day

        const flightDate = new Date(flight.scheduleDateTime);
        flightDate.setHours(0, 0, 0, 0); // Normalize flight date to start of the day

        // Check if the flight's date is within the specified range
        const isDateInRange = flightDate >= startDate && flightDate <= endDate;

        // Check if the destination matches params[1] (assuming params[1] contains the destination)
        const isDestinationStartMatch =
          filterParams[0] !== undefined
            ? flight?.route?.destinations[0] === filterParams[0]
            : true;
        const isDestinationMatch =
          filterParams[1] !== undefined
            ? flight?.route?.destinations[0] === filterParams[1]
            : true;

        // Return true if the flight matches the date range and destination
        return isDateInRange && isDestinationMatch && isDestinationStartMatch;
      });

      // Set the filtered flights to state
      setFilteredFlights(arr);
    } catch (error) {
      console.error("Error filtering flights:", error); // Log errors if any
    }
  };

  // Function to set the filterParams into state (params)
  const handleParams = async () => {
    setParams(await filterParams);
  };

  // Effect that triggers flight filtering when filterParams or departure times change
  useEffect(() => {
    handleParams(); // Set the params for filtering
    filterFlights(); // Filter the flights based on params
  }, [filterParams, departureTimeStart, departureTimeEnd]);

  // Effect that triggers when the flight list changes, updating the destinations
  useEffect(() => {
    getDestinations(); // Get destinations when flights data changes
  }, [flights]);

  return (
    <div className=" bg-[#F6F4F8] p-4 h-full w-full flex flex-col shadow-xl rounded-lg max-lg:overflow-y-scroll ">
      <header className="flex flex-row justify-between mb-3">
        <Logo /> {/* Display the logo component */}
        <HeaderRight /> {/* Display the header right component */}
      </header>
      <main className=" flex flex-row flex-1 gap-4 max-md:flex-col overflow-hidden max-md:overflow-scroll">
        <div className=" flex-1 flex flex-col gap-3  ">
          <div className=" w-[100%] ">
            <SearchBox destTo={destTo} destFrom={destFrom} />{" "}
            {/* Display search box with destinations */}
          </div>
          <div className=" grid grid-rows-3 grid-flow-col gap-3 max-lg:flex max-lg:flex-col-reverse overflow-scroll max-lg:flex-1 max-lg:justify-end">
            <div className="row-span-3 col-span-3 gap-3 flex flex-col  max-lg:h-44 max-lg:flex-1  overflow-scroll">
              {/* Display the filtered flights if any, else display all flights */}
              {filteredFlights?.length > 0
                ? filteredFlights?.map((flight) => (
                    <FlightCard
                      key={flight.id}
                      flight={flight}
                      airline={airlines}
                      aircraftTypes={aircraftTypes}
                      destinations={destinations}
                      from={flight.prefixICAO}
                      to={flight.route.destinations[0]}
                    />
                  ))
                : flights &&
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
              <Options airlines={airlines} />{" "}
              {/* Display options for filtering airlines */}
            </div>
          </div>
        </div>
        <div className=" max-md:h-52 max-md:w-[100%] max-lg:w-40 lg:w-52">
          <Ads /> {/* Display ads section */}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
