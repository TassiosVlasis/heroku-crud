CREATE DATABASE company;

CREATE TABLE employee(

    emp_id INT SERIAL PRIMARY KEY,
    fname VARCHAR(40),
    lname VARCHAR(40),
    birth_day DATE,
    sex VARCHAR(1),
    salary INT
);

INSERT INTO employee(emp_id, fname, lname, birth_day, sex, salary)
    VALUES('1' , 'ANDREAS' , 'GEORGIOU' , '1990-01-01' , 'M' , '12000'),
    ('2', 'BASILIS' , 'PAPADOPOULOS' , '1995-07-20' , 'M' , '13000'),
    ('3', 'GEORGIOS' , 'ANDREOU' , '1982-09-12' , 'M' , '15000'),
    ('4', 'XARIS' , 'TANIDIS' , '1988-05-01' , 'M' , '14000');