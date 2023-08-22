const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  console.log(req.query);

  res.send("<h1>Hello World!</h1>");
});

app.get("/jobs/:id", (req, res) => {
  console.log(req.params);

  res.send("<h1>Hello World!</h1>");
});

app.get("/jobs", (req, res) => {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      salary: 10000000,
      location: "Jakarta",
      description: "lorem ipsum",
    },
    {
      id: 2,
      title: "Backend Developer",
      salary: 10000000,
      location: "Jakarta",
      description: "lorem ipsum",
    },
  ];

  res.json(jobs);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
