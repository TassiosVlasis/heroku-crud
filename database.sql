CREATE DATABASE dept;

CREATE TABLE employee(
    id INT SERIAL PRIMARY KEY,
    name VARCHAR(40),
    username VARCHAR(40),
    birth_day DATE,
    sex VARCHAR(1),
    salary INT

)

