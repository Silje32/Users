import { useState } from "react";

export default function Users() {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  // Put the array of objects in a useState
  const [data, setData] = useState(mockData);

  // Update input field
  const [newUser, setNewUser] = useState({});

  return (
    <div>
      <h1>USERS</h1>
      {data.map((user, index) => (
        <div key={index}>
          <h2>Navn: {user.username}</h2>
          <p>Epost: {user.email}</p>
        </div>
      ))}
      <div>
        <h3>Would you like to add a user to the list?</h3>
      </div>

      <div className="input-container">
        <input type="text" placeholder="Enter name" />
        <input type="email" placeholder="Enter email" />
        <button>Add User</button>
      </div>
    </div>
  );
}
