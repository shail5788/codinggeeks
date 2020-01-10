import React from "react";
const DashboardLayout = ({ children, ...rest }) => {
  return (
    <div className="page page-dashboard">
      <div className="sidebar">This is the Second Layout</div>
      <div className="main">{children}</div>
    </div>
  );
};
export default DashboardLayout;
