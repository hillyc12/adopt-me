import React, { useState } from "react";

const useDropdown = (label2, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  console.log(label2);
  const id = `use-dropdown-${label2.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label2}
      <select
        id={id}
        value={state}
        onChange={(e) => updateState(e.target.value)}
        onBlur={(e) => updateState(e.target.value)}
        disabled={!options.length}
      >
        <option />
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, updateState];
};
export default useDropdown;