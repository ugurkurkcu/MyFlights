import React, { useEffect, useState } from "react";
import Radio from "./Radio";
import { stops, time } from "../constants/options";

const Options = ({ airlines }) => {
  const [airlinesList, setAirlinesList] = useState();

  useEffect(() => {
    handleList();
  }, [airlines]);
  const handleList = async () => {
    const list = await airlines.map((item) => {
      const newItem = { content: item?.publicName };
      return newItem;
    });
    setAirlinesList(await list);

  };
  return (
    <div className="px-5 overflow-scroll">
      <div className="flex flex-col gap-2 mb-2">
        <label className="font-bold">Sort by:</label>
        <select className="py-1 px-2 rounded-md bg-white">
          <option value="">Lowest Price</option>
          <option value="">Highest Price</option>
        </select>
      </div>

      <Radio title="Arrival Time" name="time" items={time} />
      <Radio title="Stops" name="stops" items={stops} />
      <Radio title="Airlines Included" name="airlines" items={airlinesList} />
    </div>
  );
};

export default Options;
