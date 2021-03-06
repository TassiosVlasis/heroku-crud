require("dotenv").config(); //load variables from .env

//pool is used to make queries to the db
const { Pool } = require("pg");
const isEmployee = process.env.NODE_ENV === "employee"; //different behavior between environments in heroku

//follow the pattern
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
  connectionString: isEmployee ? process.env.DATABASE_URL : connectionString,
  ssl: isEmployee,
});

module.exports = { pool };
