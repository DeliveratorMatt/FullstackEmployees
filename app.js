import express from "express";
import employeesRouter from "#api/employees";
const app = express();
export default app;

// Welcome message
app.route("/").get((req, res) => {
  res.send("Welcome to the Fullstack Employees API.");
});

// Employees router
app.use("/employees", employeesRouter);
