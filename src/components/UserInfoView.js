import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function UserInfoView() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        const userData = response.data.data;
        setUser(userData);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  return (
    <div>
      <Link to="/">
        <button className="blue-button">
          <h1>Back</h1>
        </button>
      </Link>
      <div className="user-info-details">
        {user && (
          <div className="user-details">
            <div className="user-info-image">
              <img src={user.avatar} alt={user.first_name} />
            </div>
            <div className="user-info-box">
              <div className="user-info-text">
                <div className="info-table">
                  <div className="title">First Name</div>
                  {user.first_name}
                  <div className="title">Last Name</div>
                  {user.last_name}
                  <div className="title">Email</div>
                  {user.email}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserInfoView;
