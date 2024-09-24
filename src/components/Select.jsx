const Select = ({ label, options, handleChange, name }) => {
  return (
    <div className="outline-none w-36 max-sm:max-w-28 ">
      <select
        className=" w-full"
        defaultValue={""}
        onChange={handleChange}
        name={name}
      >
        <option hidden value="">
          {name}
        </option>
        {options &&
          options.map((i, k) => (
            <option key={k} value={i}>
              {i}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
