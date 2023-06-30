import React from "react";

// eslint-disable-next-line react/prop-types
const DashboardHeading = ({ title = "", desc = "", children }) => {
  return (
    <div className="mb-9 flex items-start justify-between">
      <div>
        <h1 className="dashboard-heading">{title}</h1>
        <p className="dashboard-short-desc">{desc}</p>
      </div>
      {children}
    </div>
  );
};

export default DashboardHeading;
