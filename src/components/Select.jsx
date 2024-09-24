const Select = ({ label, options, handleChange, name }) => {
  return (
    <div className="outline-none w-36 max-sm:max-w-28">
      {/* Render a select dropdown */}
      <select
        className="w-full"
        defaultValue={""} // Set the default value as an empty string
        onChange={handleChange} // Trigger handleChange when an option is selected
        name={name} // Associate the select with a name attribute
      >
        {/* Placeholder option that is hidden once a valid option is selected */}
        <option hidden value="">
          {name} {/* Display the name as the placeholder */}
        </option>

        {/* Map through the options array and render each one as an option element */}
        {options &&
          options.map((i, k) => (
            <option key={k} value={i}>
              {i} {/* Display the option value */}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
