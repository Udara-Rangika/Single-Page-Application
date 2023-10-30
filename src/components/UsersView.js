import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UsersView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((response) => {
        const userData = response.data.data;
        setUsers(userData);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div>
      <div className="blue-bar">
        <h1>Title</h1>
      </div>
      <div className="users-title">
        <h2>Users</h2>
      </div>
      <div className="user-cards">
        {users.map((user) => (
          <Link
            to={`/user/${user.id}`}
            key={user.id}
            className="user-card-link"
          >
            <div className="user-card">
              <div className="user-image">
                <img src={user.avatar} alt={user.first_name} />
              </div>
              <div className="user-info">
                <p>
                  <h2>{user.first_name}</h2>
                </p>
                <p>{user.email}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UsersView;
