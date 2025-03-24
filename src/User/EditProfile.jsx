import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile() {
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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    setUserData({ ...userData, image: imageUrl });
  };

  const handleUpdate = () => {
    localStorage.setItem("dataUser", JSON.stringify(userData));
    navigate("/dashboardUser/profile");
  };

  return (
    <div>
      <h1 className="text-center mt-2">Update Profile</h1>
      <div className="image">
        {image ? <img src={image} alt="Profile" width="200" /> : <p>No Image</p>}
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      <table>
        <tbody>
          <tr>
            <th>Username:</th>
            <td>
              <input type="text" value={userData.name || ""} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
            </td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>
              <input type="email" value={userData.email || ""} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
            </td>
          </tr>
        </tbody>
      </table>

      <button className="btn btn-success" onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default EditProfile;
