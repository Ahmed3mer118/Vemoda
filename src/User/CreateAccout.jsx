import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function CreateAccout() {
  const [createUser, setCreateUser] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
  });
  const [dataUser, setDataUser] = useState([]);
  const navigate = useNavigate();
  // const handleSumbit = (e) => {
  //   e.preventDefault();
  //   // console.log(createUser);
  //   if (
  //     createUser.name == "" ||
  //     createUser.email == "" ||
  //     createUser.password == "" ||
  //     createUser.confPassword == ""
  //   ) {
  //     toast.error("Check Data");
  //   } else {
  //     if (createUser.password == createUser.confPassword) {
  //       toast.success("Successfully !");

  //       dataUser.push(createUser);
  //       localStorage.setItem("dataUser", JSON.stringify(dataUser));
  //       setTimeout(() => {
  //         navigate("/dashboardUser");
  //       }, 7000);
  //     } else {
  //       toast.error("Password is not Confirmation");
  //     }
  //   }
  // };
  return (
    <form className="container">
      <ToastContainer />
      <h1 className="text-center">Create Account</h1>
      <input type="text" placeholder="User Name" className="form-control m-4" />
      <input type="email" placeholder="Email" className="form-control m-4" />
      <input
        type="password"
        placeholder="Password"
        className="form-control m-4"
      />
      <input
        type="password"
        placeholder="confirmation Password"
        className="form-control m-4"
      />
      <button className="btn btn-primary m-3"> Create</button>
    </form>
  );
}

export default CreateAccout;
