import React, { useState, useEffect } from "react";

const EditEmployee = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  //in order to change user when you edit someone else
  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
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
        data-parse="date"
        placeholder="MM/DD//YYYY"
        pattern="\d{2}\/\d{2}/\d{4}"
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
      <button>Update</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditEmployee;
