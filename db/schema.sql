DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
    id serial PRIMARY KEY,
    name text NOT NULL,
    birthday date,
    salary integer NOT NULL
);
