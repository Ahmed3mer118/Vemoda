import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./user.css"; 
function SignUp() {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!users.name || !users.email || !users.password) {
      toast.error("All fields are required!");
      return;
    }

    localStorage.setItem("userData", JSON.stringify(users));
    toast.success("Account created successfully!");

    setTimeout(() => {
      navigate("/dashboardUser/profile", { state: users });
    }, 1500);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <ToastContainer position="top-center" />
        <h1 className="text-center">Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="User Name"
            className="form-control mt-3 mb-3"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mt-3 mb-3"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mt-3 mb-3"
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>

        <div className="text-center mt-3">
          <Link to="/dashboardUser">Already have an account? Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
