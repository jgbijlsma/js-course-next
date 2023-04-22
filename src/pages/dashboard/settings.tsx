import { useState } from "react";

export default function Settings() {
  const [isAdmin, setIsAdmin] = useState(false);

  function onAdminChange() {
    setIsAdmin(!isAdmin);
  }

  return (
    <div>
      <h1>Settings page</h1>
      {isAdmin ? <p>User is an admin</p> : <p>User is NOT an admin</p>}
      <button onClick={onAdminChange}>
        {isAdmin ? "Remove admin" : "Make admin"}
      </button>
    </div>
  );
}
