import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function DashboardHome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const storageData = JSON.parse(localStorage.getItem("users")) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = storageData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      toast.success("Successfully Logged In!");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/dashboardUser/profile");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <ToastContainer position="top-center" />
      <h1 className="text-center">Sign in</h1>
      <input
        type="email"
        placeholder="Email"
        className="form-control m-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="form-control m-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="btn btn-primary m-2">Sign In</button>
      <div>
        <Link to="/dashboardUser/create_account" className="text-primary border-bottom m-2">
          Create Account
        </Link>
      </div>
    </form>
  );
}

export default DashboardHome;
