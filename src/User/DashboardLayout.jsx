import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import "./user.css";

function DashboardLayout(){ 
  return (
    <div className="container">
      <div className="row ">
        <div className="col-2 right-col">
          <nav className="mt-2">
            <ol>
              <li>
                <Link to="/dashboardUser/profile">Profile</Link>
              </li>

              <li>
                <Link to="/dashboardUser">Purchases</Link>
              </li>
              <li>
                <Link to="/dashboardUser">Support</Link>
              </li>
              <li>
                <Link to="/dashboardUser">Setting</Link>
              </li>
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
