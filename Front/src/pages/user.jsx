import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Account from "../components/account";
import { userName } from "../redux/apiCall";

const User = () => {
  const accountData = [
    {
      title: "Argent Bank Checking (x8349)",
      content: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      content: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      content: "$184.30",
      description: "Current Balance",
    },
  ];

  const user = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(user.userName);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmitClick = () => {
    dispatch(userName(newUserName));
    setIsEditing(false);
  };

  const tag = `${user.firstName} ${user.lastName}`;

  return (
    <main className="main bg-dark">
      <div className="user-form">
        {isEditing ? (
          <div className="edit-infos">
            <h1>Edit user info</h1>
            <div className="edit">
              <div className="edit-form">
                <h3>Username : </h3>
                <input
                  type="text"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                />
              </div>
              <div className="edit-form">
                <h3>First name : </h3>
                <input type="text" value={user.firstName} disabled />
              </div>
              <div className="edit-form">
                <h3>Last name : </h3>
                <input type="text" value={user.lastName} disabled />
              </div>
            </div>
            <div className="edit-buttons">
              <button onClick={handleSubmitClick}>Save</button>
              <button onClick={handleEditClick}>Cancel</button>
            </div>
          </div>
        ) : (
          <div>
            {user.firstName ? (
              <h1 style={{ padding: 10 }}>
                Welcome back <br /> {tag} !
              </h1>
            ) : (
              <img
                src="https://i.gifer.com/ZKZg.gif"
                style={{ padding: 40 }}
                width={100}
                alt="Loading..."
              />
            )}
            <button className="edit-button" onClick={handleEditClick}>
              Edit Name
            </button>
          </div>
        )}
      </div>
      {accountData.map(({ title, content, description }) => (
        <Account
          key={title}
          title={title}
          content={content}
          description={description}
        />
      ))}
    </main>
  );
};

export default User;
