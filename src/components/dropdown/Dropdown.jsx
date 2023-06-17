import React from "react";
import { DropdownProvider } from "./dropdown-context";

// eslint-disable-next-line react/prop-types
const Dropdown = ({ children, ...props }) => {
  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full">{children}</div>
    </DropdownProvider>
  );
};

export default Dropdown;
