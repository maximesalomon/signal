const express = require("express");
const db = require("./data/db");

const server = express();
const PORT = 7000;

server.use(express.json());

// API Homepage
server
  .get("/", (req, res) => {
    res.send("Hello, world!");
  })

// GET all signals
server.get("/api/signals", (req, res) => {
  db("signals")
    .then(signals => {
      res.json(signals);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get signals!" });
    });
});

// GET signal by id
server.get("api/signals/:id", (req, res) => {
  const { id } = req.params;
  db("signals")
    .where({ id })
    .then(signal => {
      if (signal.length) {
        res.json(signal);
      } else {
        res
          .status(404)
          .json({ message: "Could not find signal with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get signal." });
    });
});

// POST signal
server.post("/api/signals", (req, res) => {
  const { signal } = req.body;
  db("signals")
    .insert(signal)
    .then(signal => {
      res.send(`Signal ${signal.title} has been successfully saved!`);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to save signal!" });
    });
});

// PUT signal by id
server.post("/api/signals/:id", (req, res) => {
  const { id } = req.params;

  db("signals")
    .where({ id })
    .update({
      /* TODO */
    })
    .then(signal => {
      res.send(`Signal ${signal.id} has been successfully updated!`);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update signal!" });
    });
});

// DELETE signal by id

server.delete("/api/signals/:id", (req, res) => {
  const { id } = req.params;

  db("signals")
    .where({ id })
    .del()
    .then(signal => {
      res.send(`Signal ${signal.id} has been successfully deleted!`);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete signal!" });
    });
});

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
