import React from "react";

// eslint-disable-next-line react/prop-types
const DashboardHeading = ({ title = "", desc = "" }) => {
  return (
    <div className="mb-9">
      <h1 className="dashboard-heading">{title}</h1>
      <p className="dashboard-short-desc">{desc}</p>
    </div>
  );
};

export default DashboardHeading;