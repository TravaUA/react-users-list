import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const usersHandler = (newUser) => {
    setUsersList((prevState) => {
      return [...prevState, newUser]
    });
    console.log(newUser);
    console.log(usersList);
  };

  return (
    <div>
      <AddUser onUserSubmit={usersHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
