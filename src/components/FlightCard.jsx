import React, { useEffect } from "react";
import { FaPlane, FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { addFlight, bookFlight } from "../store/flightSlice";
import { useDispatch } from "react-redux";
import { local } from "../utils/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FlightCard = ({
  flight,
  airline,
  destinations,
  aircraftTypes,
  from,
  to,
}) => {
  const dispatch = useDispatch();

  const sec =
    new Date(flight.lastUpdatedAt) - new Date(flight.scheduleDateTime);
  const min = Math.floor(sec / (1000 * 60));
  const h = Math.floor(min / 60);
  const m = min % 60;

  const randomPrice = Math.round(Math.random() * 500 + 100);

  const departure = new Date(flight.scheduleDateTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const arrival = new Date(flight.lastUpdatedAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleClick = () => {
    const details = {
      time: `${departure} - ${arrival}`,
      airlineNumber: `${flight.airlineCode}`,
      destination: `${from} to ${to}`,
      price: randomPrice,
      flightName: `${flight.flightName}`,
      duration: `${h}h ${m}m`,
    };
    local
      .post("/myflights", details)
      .then(() => {
        toast.success("Flight is booked succesfully!");
        dispatch(addFlight(details));
      })
      .catch((err) => {return err});
  };

  return (
    <div className="bg-transparent rounded-md">
<ToastContainer/>
      <div className="bg-white p-3 mb-2 relative rounded-tr-md rounded-tl-md rounded-br-md">
        <div className="mb-1">
          <h3 className="text-md font-semibold">
            <span>{from}</span> - <span>{to}</span>
          </h3>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              <FaPlaneDeparture />
              <p className="text-xs ml-2">Departure</p>
            </div>
            <div>
              <h4 className="text-md font-semibold">{departure}</h4>
              <p className="text-xs">
                Airport: <span>{from}</span>
              </p>
            </div>
          </div>

          <div className="mx-4 w-20">
            <hr style={{ borderColor: "gray", borderWidth: "1.5px" }} />
          </div>

          <div className="text-center flex flex-col items-center">
            <p className="text-[#217644] font-semibold mt-1">
              {flight.airlineCode}
            </p>
            <FaPlane className="text-[#4B0097] mb-1 text-md" />
            <p className="text-xs ">
              {h}h {m}m (Nonstop)
            </p>
          </div>

          <div className="mx-4 w-20">
            <hr style={{ borderColor: "gray", borderWidth: "1.5px" }} />
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center">
              <FaPlaneArrival className="" />
              <p className="text-xs  ml-2">Arrival</p>
            </div>
            <div>
              <h4 className="text-md font-semibold">{arrival}</h4>
              <p className="text-xs ">
                Airport: <span>{to}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-1">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="text-[#4B0097] text-md font-semibold">Price:</p>
              <p className="text-[#4B0097] text-md font-semibold ml-1">
                ${randomPrice}
              </p>
            </div>
            <div>
              <p className="text-xs ">Round Trip</p>
            </div>
          </div>

          <button
            onClick={handleClick}
            className="bg-[#4B0097] text-white px-8 py-3 text-sm rounded-tl-md rounded-br-md font-semibold absolute bottom-0 right-0"
          >
            Book Flight
          </button>
        </div>
      </div>

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
