const express = require("express");
const db = require("./data/db");
const bodyParser = require("body-parser");
const helmet = require('helmet')

const server = express();
const PORT = process.env.PORT || 7000;

server.use(helmet());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// API Homepage
server.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Server listening
server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);


//////////   SIGNALS   //////////

// GET all signals
server.get("/api/signals", (req, res) => {
  db("signals")
    .then(signals => {
      res.json(signals);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get all signals!" });
    });
});

// GET signal by id
server.get("/api/signals/:id", (req, res) => {
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
  const signal = req.body;
  db("signals")
    .insert(signal)
    .then(success => {
      res.send(`Signal has been successfully saved!`);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to save signal!" });
    });
});

// PUT signal by id
server.put("/api/signals/:id", (req, res) => {
  const { id } = req.params;
  const signal = req.body;
  db("signals")
    .where({ id })
    .update(signal)
    .then(success => {
      if (success === 1) {
        res.send(`Signal has been successfully updated!`);
      } else {
        res
          .status(404)
          .json({ message: "Could not find signal with given id." });
      }
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
    .then(success => {
      if (success === 1) {
        res.send(`Signal has been successfully deleted!`);
      } else {
        res
          .status(404)
          .json({ message: "Could not find signal with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete signal!" });
    });
});


//////////   COMPANIES   //////////

server.get("/api/companies", (req, res) => {
  db("companies")
    .then(companies => {
      res.json(companies);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get all companies!" });
    });
});