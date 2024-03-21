import React from "react";

import "../styles/components/userInitial.css";

function UserInitial() {
  const user = {
    name: "John",
  };

  return (
    <div className="user-initial-container">
      <p>{user.name[0]}</p>
    </div>
  );
}

export default UserInitial;
