import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "../Context/Context";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const { cart } = useContext(DataContext);
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setCount(cart.length);
  }, [cart]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Vemoda
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/favorite" className="nav-link">
                <CiHeart /> 
                <span className="badge bg-danger">{count}</span>
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                <IoCartOutline />
                <span
                  className={`badge ${
                    count == 0 ? "bg-danger " : "bg-success"
                  }`}
                >
                  {count}
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              {localStorage.getItem("userData") ? (
                <NavLink to="/dashboardUser/profile" className="nav-link">
                  <VscAccount />
                </NavLink>
              ) : (
                <NavLink to="/login" className="nav-link">
                  login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
