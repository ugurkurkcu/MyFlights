import React from "react";
import { FaPlane, FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { addFlight } from "../store/flightSlice";
import { useDispatch } from "react-redux";
import { local } from "../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FlightCard = ({ flight, from, to }) => {
  const dispatch = useDispatch();

  // Calculate the difference between the departure and arrival times in milliseconds
  const sec =
    new Date(flight.lastUpdatedAt) - new Date(flight.scheduleDateTime);
  // Convert the difference into minutes
  const min = Math.floor(sec / (1000 * 60));
  // Calculate hours and minutes from the difference
  const h = Math.floor(min / 60);
  const m = min % 60;

  // Generate a random price between 100 and 600 for the flight
  const randomPrice = Math.round(Math.random() * 500 + 100);

  // Format the departure and arrival times into "HH:MM AM/PM" format
  const departure = new Date(flight.scheduleDateTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const arrival = new Date(flight.lastUpdatedAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Handle the "Book Flight" button click
  const handleClick = () => {
    // Prepare flight details to be saved
    const details = {
      time: `${departure} - ${arrival}`,
      airlineNumber: `${flight.airlineCode}`,
      destination: `${from} to ${to}`,
      price: randomPrice,
      flightName: `${flight.flightName}`,
      duration: `${h}h ${m}m`,
    };

    // Send the flight details to the server and add them to Redux store
    local
      .post("/myflights", details)
      .then(() => {
        toast.success("Flight is booked successfully!"); // Show success notification
        dispatch(addFlight(details)); // Dispatch the flight to Redux
      })
      .catch((err) => {
        return err; // Handle error (could be expanded to display error messages)
      });
  };

  return (
    <div className="bg-transparent rounded-md">
      <ToastContainer />{" "}
      {/* Notification container for displaying success/error messages */}
      <div className="bg-white p-3 mb-2 relative rounded-tr-md rounded-tl-md rounded-br-md">
        <div className="mb-1">
          <h3 className="text-md font-semibold">
            <span>{from}</span> - <span>{to}</span>{" "}
            {/* Show the flight route (from -> to) */}
          </h3>
        </div>

        {/* Flight information: departure, arrival, duration */}
        <div className="flex justify-between items-center">
          {/* Departure information */}
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              <FaPlaneDeparture /> {/* Icon for departure */}
              <p className="text-xs ml-2">Departure</p>
            </div>
            <div>
              <h4 className="text-md font-semibold">{departure}</h4>{" "}
              {/* Display the departure time */}
              <p className="text-xs">
                Airport: <span>{from}</span> {/* Display departure airport */}
              </p>
            </div>
          </div>

          {/* Separator (line between departure and arrival) */}
          <div className="mx-4 w-20">
            <hr style={{ borderColor: "gray", borderWidth: "1.5px" }} />
          </div>

          {/* Flight details in the middle (airline code and duration) */}
          <div className="text-center flex flex-col items-center">
            <p className="text-[#217644] font-semibold mt-1">
              {flight.airlineCode} {/* Airline code */}
            </p>
            <FaPlane className="text-[#4B0097] mb-1 text-md" />{" "}
            {/* Plane icon */}
            <p className="text-xs ">
              {h}h {m}m (Nonstop) {/* Flight duration */}
            </p>
          </div>

          {/* Separator (line between departure and arrival) */}
          <div className="mx-4 w-20">
            <hr style={{ borderColor: "gray", borderWidth: "1.5px" }} />
          </div>

          {/* Arrival information */}
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center">
              <FaPlaneArrival className="" /> {/* Icon for arrival */}
              <p className="text-xs  ml-2">Arrival</p>
            </div>
            <div>
              <h4 className="text-md font-semibold">{arrival}</h4>{" "}
              {/* Display the arrival time */}
              <p className="text-xs ">
                Airport: <span>{to}</span> {/* Display arrival airport */}
              </p>
            </div>
          </div>
        </div>

        {/* Pricing and booking section */}
        <div className="flex justify-between items-center mt-1">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="text-[#4B0097] text-md font-semibold">Price:</p>
              <p className="text-[#4B0097] text-md font-semibold ml-1">
                ${randomPrice} {/* Display the randomly generated price */}
              </p>
            </div>
            <div>
              <p className="text-xs ">Round Trip</p>{" "}
              {/* Display that this is a round trip */}
            </div>
          </div>

          {/* Book flight button */}
          <button
            onClick={handleClick}
            className="bg-[#4B0097] text-white px-8 py-3 text-sm rounded-tl-md rounded-br-md font-semibold absolute bottom-0 right-0"
          >
            Book Flight
          </button>
        </div>
      </div>
      {/* Link to check flight details */}
      <div className="text-center mt-[-15px]">
        <a
          href="https://example.com/details"
          className="text-xs text-[#4B0097] underline bg-[#E6E1EB] px-4 py-3 rounded-bl-md rounded-br-md block w-max"
        >
          Check the details
        </a>
      </div>
    </div>
  );
};

export default FlightCard;
