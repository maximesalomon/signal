const express = require('express');

const server = express();

const PORT = 7000;

server.get('/', (req, res) => {
  res.send('Hello, world!');
});

server.post('/api/signals', (req, res) => {
    res.send('Buying signal successfully processed!')
})

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);