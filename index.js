const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { pool } = require("./config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const getEmployees = (request, response) => {
  pool.query("SELECT * FROM company", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addEmployee = (request, response) => {
  const { author, title } = request.body;

  pool.query(
    "INSERT INTO employee (emp_id , fname , lname , birth_day , sex , salary) VALUES($1, $2, $3, $4, $5, $6)",
    [emp_id, fname, lname, birth_day, sex, salary],
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
