import React, { useState } from "react";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";

const App = () => {
  const usersData = [
    {
      id: 1,
      name: "Alex",
      username: "Alexey",
      birthday: "01/10/1990",
      sex: "M",
      salary: "15000",
    },
    {
      id: 2,
      name: "Brain",
      username: "Perk",
      birthday: "01/01/1980",
      sex: "M",
      salary: "15000",
    },
    {
      id: 3,
      name: "Carl",
      username: "Tref",
      birthday: "08/01/1985",
      sex: "M",
      salary: "15000",
    },
  ];

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false); //edit mode

  const initialFormState = {
    id: null,
    name: "",
    username: "",
    birthday: "",
    sex: "",
    salary: "",
  };
  const [currentUser, setCurrentUser] = useState(initialFormState); //see and update who the current user being edited

  //crud operations

  const addUser = (user) => {
    user.id = users.length + 1; //auto-increment user's id
    setUsers([...users, user]);
  };
  //take the ID of the user and filter them out of the user array
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);
  };
  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
      birthday: user.birthday,
      sex: user.sex,
      salary: user.salary,
    });
    //setCurrentUser(user);
  };
  const updateUser = (id, updatedUser) => {
    setEditing(false);

    //map through the array, and update the user that matches the ID passed through.
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };
  return (
    <div className="container">
      <h1>CRUD App</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit employee</h2>
              <EditEmployee
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add employee</h2>
              <AddEmployee addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View employees</h2>
          <ListEmployee
            users={users}
            editRow={editRow}
            deleteUser={deleteUser}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
