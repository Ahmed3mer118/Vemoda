import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Account() {
  const [userData, setUserData] = useState({});
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("dataUser"));
    if (storedUser) {
      setUserData(storedUser);
      setImage(storedUser.image);
    }
  }, []);

  const handleUpdateProfile = () => {
    navigate("/dashboardUser/profile/edit");
  };

  const handleImageChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    const updatedUser = { ...userData, image: imageUrl };
    setUserData(updatedUser);
    localStorage.setItem("dataUser", JSON.stringify(updatedUser));
  };

  return (
    <div className="account">
      <h1 className="text-center mt-2">My Profile</h1>

      <div className="image">
        {image ? <img src={image} alt="User Profile" width="150" /> : "No Image"}
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      <table>
        <tbody>
          <tr>
            <th>Username:</th>
            <td>{userData.name || "Not Set"}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{userData.email || "Not Set"}</td>
          </tr>
        </tbody>
      </table>

      <button className="btn btn-success" onClick={handleUpdateProfile}>
        Edit Profile
      </button>
    </div>
  );
}

export default Account;
