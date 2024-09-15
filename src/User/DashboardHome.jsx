import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function DashboardHome() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // const handleSumbit = (e) => {
  //   e.preventDefault();
  //   for (let i = 0; i < storageData.length; i++) {
  //     // console.log(storageData[i].email)
  //     if (
  //       storageData[i].email == dataSignUp.email &&
  //       storageData[i].password == dataSignUp.password
  //     ) {
  //       toast.success("Successfully");
  //       navigate("/dashboardUser/profile");
  //     } else {
  //       toast.error("data is not correct");
  //     }
  //   }
  // };

  return (
    <form className="container" >
      <ToastContainer position="top-center" />
      <h1 className="text-center">Sign in</h1>
      <input
        type="email"
        placeholder="email"
        className="form-control m-4"
     
      />
      <input
        type="password"
        placeholder="Password"
        className="form-control m-4"
      
      />
      <button className="btn btn-primary m-2">Sign In</button>
      {/* <Link to="/dashboardUser/signUp"> Sign Up</Link> */}
      <div>
        <Link
          to="/dashboardUser/create_account"
          className="text-primary border-bottom m-2"
        >
          Create Account
        </Link>
      </div>
    </form>
  );
}

export default DashboardHome;
