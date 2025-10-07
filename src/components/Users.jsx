import { useState } from "react";

export default function Users() {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  const [name, setName] = useState(mockData);
  const [email, setEmail] = useState(null);

  return (
    <>
      <h1>USERS</h1>
      <div className="input-container">
        <input type="text" placeholder="Enter user name" />
        <input type="email" placeholder="Enter user email" />
        <button>Add User</button>
      </div>
    </>
  );
}
