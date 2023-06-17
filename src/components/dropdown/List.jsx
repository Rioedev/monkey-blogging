import React from "react";
import { useDropdown } from "./dropdown-context";

// eslint-disable-next-line react/prop-types
const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="absolute top-full left-0 w-full bg-white shadow-sm">
          {children}
        </div>
      )}
    </>
  );
};

export default List;
