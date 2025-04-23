import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  const SEED = [
    {
      name: "Sarah Jones",
      birthday: "11-01-1981",
      salary: 45632,
    },
    {
      name: "Thomas Jameson",
      birthday: "03-16-1972",
      salary: 56789,
    },
    {
      name: "Hannah Liu",
      birthday: "04-10-1995",
      salary: 53427,
    },
    {
      name: "Michael Kim",
      birthday: "10-17-1988",
      salary: 64321,
    },
    {
      name: "Janice Stanislavski",
      birthday: "05-10-2001",
      salary: 34562,
    },
    {
      name: "Pierre LaRoche",
      birthday: "08-08-1978",
      salary: 89999,
    },
    {
      name: "Serena Sanchez",
      birthday: "01-22-1999",
      salary: 49998,
    },
    {
      name: "Hector Imbalaya",
      birthday: "09-04-1980",
      salary: 78754,
    },
    {
      name: "Jessene Alvarez",
      birthday: "02-10-1997",
      salary: 100023,
    },
    {
      name: "Olivero Meiner",
      birthday: "06-07-2001",
      salary: 39061,
    },
    {
      name: "Tyler Perkins",
      birthday: "07-04-1984",
      salary: 89765,
    },
  ];

  for (const employee of SEED) {
    await createEmployee(employee);
  }
}
