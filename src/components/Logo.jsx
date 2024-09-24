import React from "react";
import { IoIosAirplane } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className=" flex flex-row items-center gap-2 cursor-pointer"
    >
      <IoIosAirplane
        color="#ffffff"
        className=" bg-[#4B0097] h-6 w-6 rounded-full"
      />
      <h2 className=" font-bold max-xl:hidden">PLANE SCAPE</h2>
    </div>
  );
};

export default Logo;
