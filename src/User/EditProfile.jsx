import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function EditProfile() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    setData({ ...data, image: URL.createObjectURL(file) });
  };
  // const handleUpdate = () => {
  //   setTimeout(() => {
  //     navigate("/dashboardUser/profile", { storageData: data });
  //     localStorage.setItem("dataUser", JSON.stringify(data))
  //   }, 2000);
  // };

  return (
    <div>
      {/* {!data.name && !data.password && !data.email && <div> NO Data..</div>} */}
      <h1 className="text-center mt-2"> Update Profile</h1>
      <div className="image">
        {image? (
          <img src={image} alt="profileImage" style={{width:"200px"}} />
        ) : (
          <img src={image} alt="profileImage" style={{width:"200px"}} />
        )}
        {/* {!image && ( */}
          <input type="file" accept="image" onChange={handleImageChange} />
        {/* )} */}
      </div>

      <table>
        <thead>
          <tr className="inputData">
            <th>
              <label htmlFor="username">User Name : </label>
            </th>
            <td>
              <input
                type="text"
               
                id="username"
              />
            </td>
          </tr>
          <tr className="inputData">
            <th>
              <label htmlFor="password">Password : </label>
            </th>
            <td>
              <input
                type="password"
              
                id="password"
              />
            </td>
          </tr>
          <tr className="inputData">
            <th>
              <label htmlFor="email">Email:</label>
            </th>
            <td>
              <input
                type="email"
      
                id="email"
              />
            </td>
          </tr>
        </thead>
      </table>
      <Link to="/dashboardUser/profile">
      <button className="btn btn-success">
        Update
      </button>
      </Link>
    </div>
  );
}

export default EditProfile;
