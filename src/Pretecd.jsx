import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Pretecd({ children, user }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
       <Navigate to="/dashboardUser/signUp" />
    }
  },[user]);
  return children;
}

export default Pretecd;
