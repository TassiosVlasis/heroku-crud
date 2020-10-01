/*
 * entry point for server
 *
 */

const express = require("express"); //import express
const bodyParser = require("body-parser");
const cors = require("cors"); //connect/express middleware
const { pool } = require("./config");

const app = express(); //access to express

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const getEmployees = (request, response) => {
  pool.query("SELECT * FROM employee", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addEmployee = (request, response) => {
  const { id, name, username, birth_day, sex, salary } = request.body;

  pool.query(
    "INSERT INTO employee (id , name , username , birth_day , sex , salary) VALUES($1, $2, $3, $4, $5, $6)",
    [id, name, username, birth_day, sex, salary],
    (error) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .json({ status: "success", message: "Employee added." });
    }
  );
};

app
  .route("/employee")
  // GET endpoint
  .get(getEmployees)
  // POST endpoint
  .post(addEmployee);

// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`);
});
