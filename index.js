const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); //connect/express middleware
const { pool } = require("./config");

const app = express();

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

const getEmployeeById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM employee WHERE id = $1", [id], (error, results) => {
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

const updateEmployee = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, username, birth_day, sex, salary } = request.body;

  pool.query(
    "UPDATE employee SET name = $1, username = $2, birth_day = $3, sex = $4, salary = $5 WHERE id = $6",
    [name, username, birth_day, sex, salary, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Employee modified with ID: ${id}`);
    }
  );
};

const deleteEmployee = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM employee WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Employee deleted with ID: ${id}`);
  });
};

app
  .route("/employee")
  // endpoints
  .get(getEmployees)
  .get("/employee/:id", getEmployeeById)
  .post(addEmployee);
app.put("/employee/:id", updateEmployee);
app.delete("/employee/:id", deleteEmployee);
//.delete("/:id", deleteEmployee);
// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`);
});
