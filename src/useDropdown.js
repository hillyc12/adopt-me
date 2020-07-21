import React, { useState } from "react";

const useDropdown = (label2, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  console.log(label2);
  const id = `use-dropdown-${label2.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label2}
      <select
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
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
  return [state, Dropdown, setState];
};
export default useDropdown;
