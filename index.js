const express = require("express");
const db = require("./data/db");
const bodyParser = require('body-parser');

const server = express();
const PORT = 7000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

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
  console.log(req.body)
  db("signals")
    .insert({
      uuid: req.body.uuid,
      company: req.body.company,
      title: req.body.title,
      url: req.body.url,
      job_opening_closed: req.body.job_opening_closed,
      location: req.body.location,
      first_seen_at: req.body.first_seen_at,
      last_seen_at: req.body.last_seen_at,
      last_processed_at: req.body.last_processed_at
    })
    .then(signal => {
      res.send(`Signal has been successfully saved!`);
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
      job_opening_closed: req.body.job_opening_closed,
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
