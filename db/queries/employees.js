import db from "#db/client";

/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  const newEmployee = `INSERT INTO
    employees(name, birthday, salary)
    VALUES($1, $2, $3)
    RETURNING *`;

  const values = [name, birthday, salary];

  const result = await db.query(newEmployee, values);
  return result.rows[0];
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  const sql = `
  SELECT * 
  FROM employees
  `;
  const { rows: employees } = await db.query(sql);
  return employees;
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  const text = `SELECT *
  FROM employees
  WHERE id = $1
  `;

  const res = await db.query(text, [id]);
  if (!res.rows[0]) return undefined;
  else return res.rows[0];
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  const text = `update employees
  SET
    name = $2,
    birthday = $3,
    salary = $4
  WHERE id = $1
  RETURNING *`;

  const result = await db.query(text, [id, name, birthday, salary]);
  return result.rows[0];
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  const text = `delete FROM employees
  WHERE id=$1
  RETURNING *`;

  const result = await db.query(text, [id]);
  return result.rows[0];
}
