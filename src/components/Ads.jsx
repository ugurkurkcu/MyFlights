import React from "react";
import { FaHotel, FaUmbrellaBeach } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";

const Card = ({ icon, title, img }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" max-md:h-full flex-1 rounded-lg p-3 content-end text-white font-bold"
    >
      {icon}
      <span>{title}</span>
    </div>
  );
};

const Ads = () => {
  return (
    <div className=" h-[100%] gap-4 flex flex-col justify-between max-md:flex-row max-md:h-44">
      <Card
        icon={<IoCarSport />}
        title={"CAR RENTALS"}
        img={"src/assets/car.jpeg"}
      />
      <Card icon={<FaHotel />} title={"HOTELS"} img={"src/assets/hotel.avif"} />
      <Card
        icon={<FaUmbrellaBeach />}
        title={"TRAVEL PACKAGES"}
        img={"src/assets/travel.avif"}
      />
    </div>
  );
};

export default Ads;
