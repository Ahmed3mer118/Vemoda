import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SignUp() {
  const [users, setUsers] = useState({
    name: "",
    password: "",
    email: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  
  
  // const handleSumbit = (e) => {
  //   // console.log(location.state)
  //   e.preventDefault();

  //   setTimeout(() => {
  //     navigate("/dashboardUser/profile", { state: users });
  //   }, 2000);
  
  // };
  return (
    <form className="container" >
      <h1 className="text-center">Sign Up</h1>
      <input
        type="text"
        placeholder="User Name"
        className="form-control m-4"
      
      />
      <input
        type="password"
        placeholder="Password"
        className="form-control m-4"
       
      />
      <input
        type="email"
        placeholder="Email"
        className="form-control m-4"
        
      />

      {/* <Link to="/dashboardUser"> */}
      <button className="btn btn-primary m-2">Sign Up</button>
      {/* </Link> */}
      <Link to="/dashboardUser"> Sign In</Link>
    </form>
  );
}

export default SignUp;
