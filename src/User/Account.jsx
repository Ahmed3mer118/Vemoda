import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Account() {
  const [image, setImage] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleUpdataProfile = () => {
    navigate("/dashboardUser/profile/edit" ,{storageData:data});
  };
  const handleImageChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    setData({ ...data, image });
    // setData({ ...data, image: URL.createObjectURL(file) });
    console.log({...data,image})
    // console.log()
    localStorage.setItem("dataUser", JSON.stringify(data))
  };

  return (
    <div className="account">
      <h1 className="text-center mt-2"> My Profile</h1>

      <div className="image">
        {image ? <img src={image} alt="image" /> : "Image User"}
        {!image && (
          <input type="file" accept="image" onChange={handleImageChange} />
        )}
      </div>
      <table>
        <thead>
          <tr className="inputData">
            <th>
              <label htmlFor="username">User Name : </label>
            </th>
            <td>
              <input type="text" disabled id="username" />
            </td>
          </tr>

          <tr className="inputData">
            <th>
              <label htmlFor="password">Password : </label>
            </th>
            <td>
              <input
                type="password"
                disabled
              
                id="password"
              />
            </td>
          </tr>
          <tr className="inputData">
            <th>
              <label htmlFor="email">Email:</label>
            </th>
            <td>
              <input type="email" disabled  id="email" />
            </td>
          </tr>
        </thead>
      </table>
      <Link to="/dashboardUser/profile/edit">
      <button className="btn btn-success" >
        Edit Profile
      </button>
      </Link>
    </div>
  );
}

export default Account;
