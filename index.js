const express = require("express");
const db = require("../data/db.js");

const server = express();
const PORT = 7000;

server.get("/", (req, res) => {
  res.send("Hello, world!");
});

server.get("/api/signals", (req, res) => {
  db("signals")
    .then(signals => {
      res.json(signals);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get signals!" });
    });
});

server.post("/api/signals", (req, res) => {
  res.send("Buying signal successfully processed!");
});

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
