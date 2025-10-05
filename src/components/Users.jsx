import { useState } from "react";

export default function Users() {
  const [name, setName] = useState("");
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
