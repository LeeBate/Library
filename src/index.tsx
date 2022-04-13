import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import AddUserForm from "./components/addUserForm";
import UserTable from "./components/userTable";
import { IBaseUser, IUser } from "./components/interface";

import "./style.css";

const defaultUsers: Array<IUser> = [
  { uid: 6301200, uname: "Lee1",ubook:"lee", id: 1, age: 18 },
  { uid: 6301200, uname: "Lee2",ubook:"lee", id: 2, age: 28 },
];


function App() {
  const [users, setUsers] = useState(defaultUsers);

  const onAddUser = (newUser: IBaseUser) => {
    const id = users.length + 1;
    setUsers([...users, { ...newUser, id }]);
  };
  const onCurrentUser = (users: IUser) => {};
  const onDeleteUser = (currentUser: IUser) => {
    setUsers(users.filter((i) => i.id !== currentUser.id));
  };
  return (
    <div className="App">
      <div className="user-flex-wrapper">
        <AddUserForm onAddUser={onAddUser} />

        <UserTable
          users={users}
          onEdit={onCurrentUser}
          onDelete={onDeleteUser}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

