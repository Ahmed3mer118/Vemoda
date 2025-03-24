import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function CreateAccount() {
  const [createUser, setCreateUser] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCreateUser({ ...createUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!createUser.name || !createUser.email || !createUser.password || !createUser.confPassword) {
      toast.error("Please fill all fields!");
      return;
    }
    if (createUser.password !== createUser.confPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    localStorage.setItem("dataUser", JSON.stringify(createUser));
    toast.success("Account Created Successfully!");

    setTimeout(() => {
      navigate("/dashboardUser");
    }, 2000);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <ToastContainer />
      <h1 className="text-center">Create Account</h1>
      <input type="text" name="name" placeholder="User Name" className="form-control m-4" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" className="form-control m-4" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" className="form-control m-4" onChange={handleChange} />
      <input type="password" name="confPassword" placeholder="Confirm Password" className="form-control m-4" onChange={handleChange} />
      <button className="btn btn-primary m-3">Create</button>
    </form>
  );
}

export default CreateAccount;
