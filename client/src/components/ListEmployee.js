import React from "react";

const ListEmployee = (props) => (
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last name</th>
        <th>Birthday</th>
        <th>Sex</th>
        <th>Salary</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.birthday}</td>
            <td>{user.sex}</td>
            <td>{user.salary}</td>
            <td>
              <button
                className="button muted-button"
                onClick={() => {
                  props.editRow(user);
                }}
                className="btn btn-warning"
              >
                Edit
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ListEmployee;
