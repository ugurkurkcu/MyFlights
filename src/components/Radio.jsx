import React from "react";

const Radio = ({ title, items, name }) => {
  return (
    <div className="mb-3">
      <h1 className="font-bold mb-1">{title}</h1>

      <div className="flex flex-col gap-1">
        {items?.map((item, key) => (
          <div key={key} className="flex item-center gap-1">
            <input type="radio" multiple={true} id={item.content} name={name} />
            <label
              htmlFor={item.content}
              className="w-full flex justify-between gap-4"
            >
              <span>{item.content}</span>
              {title !== "Arrival Time" && <span>$230</span>}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
