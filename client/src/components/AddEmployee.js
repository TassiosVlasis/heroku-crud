import React, { useState } from "react";

const AddEmployee = (props) => {
  const initialFormState = {
    id: null,
    name: "",
    username: "",
    birthday: "",
    sex: "",
    salary: "",
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (
          !user.name ||
          !user.username ||
          !user.birthday ||
          !user.sex ||
          !user.salary
        )
          return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>First Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Last name</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <label>Birthday</label>
      <input
        type="text"
        name="birthday"
        value={user.birthday}
        onChange={handleInputChange}
      />
      <label>Sex</label>
      <input
        type="text"
        name="sex"
        value={user.sex}
        onChange={handleInputChange}
      />
      <label>Salary</label>
      <input
        type="text"
        name="salary"
        value={user.salary}
        onChange={handleInputChange}
      />
      <button>Add</button>
    </form>
  );
};
export default AddEmployee;
