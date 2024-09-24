import React from "react";
import { IoEarth } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HeaderRight = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-row  gap-4">
      <div onClick={() => navigate("MyFlights")} className="flex flex-row cursor-pointer gap-1 items-center">
        <MdLocalOffer />
        <h3 className=" text-sm">Deals</h3>
      </div>

      <div onClick={() => navigate("/")} className="flex flex-row cursor-pointer gap-1 items-center">
        <IoEarth />
        <h3 className=" text-sm">Discover</h3>
      </div>
      <div className="flex flex-row  gap-2 items-center cursor-pointer">
        <div className=" w-8 h-8 rounded-full overflow-hidden border-red-500">
          <img
            className=" object-contain"
            src="https://picsum.photos/200"
            alt="profilePic"
          />
        </div>
        <h3 className=" text-sm">Joane Smith</h3>
      </div>
    </div>
  );
};

export default HeaderRight;
