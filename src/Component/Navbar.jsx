import React, { useContext, useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "../Context/Context";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const { cart  } = useContext(DataContext);
  // console.log(cart.length)
 
  const [count, setCount] = useState(0);
  const [menoOpen , setMenuopen] = useState(false)
  const showNabar =()=>{
    setMenuopen(!menoOpen)
  }
  useEffect(() => {
    setCount(cart.length);
  }, [cart]);

  return (
    <React.Fragment>
      <nav className=" navbar-light bg-light">
        <div className=" nav-container">
          <h1 id="Logo"> Vemoda</h1>
          {/* <input type="search" placeholder="Search" id="search" /> */}

          <ul className={menoOpen ? "responsive" : ""}>
            <li className="">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="">
              <NavLink to="/products">Products</NavLink>
            </li>

            <li className="">
              <NavLink to="/cart">
                
                <IoCartOutline /> {count} Cart
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/favorite">
                <CiHeart /> Favorite
              </NavLink>
            </li>
            {/* <li className="">
              <a href="">
                <MdOutlineNotificationsActive />Notification
              </a>
            </li> */}
            <li className="">
              <NavLink to="/dashboardUser">
                <VscAccount /> Account
              </NavLink>
            </li>
            <button onClick={showNabar} className="btn btn-close">
            {/* <FaTimes /> */}
          </button>
          </ul>
          <button onClick={showNabar} className="btn">
          <FaBars />
        </button>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
