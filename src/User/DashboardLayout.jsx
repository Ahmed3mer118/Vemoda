import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import "./user.css";

function DashboardLayout() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  // if (!user) {
  //   return <Navigate to="/dashboardHome" replace />;
  // }

  return (
    <div className="container">
      <div className="row">
        <div className="col-2 right-col">
          <nav className="mt-2">
            <ol>
              <li><Link className="m-2" to="/dashboardUser/profile">Profile</Link></li>
              <li><Link className="m-2" to="/dashboardUser/purchases">Purchases</Link></li>
              <li><Link className="m-2" to="/dashboardUser/support">Support</Link></li>
              <li><Link className="m-2" to="/dashboardUser/settings">Settings</Link></li>
            </ol>
          </nav>
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
