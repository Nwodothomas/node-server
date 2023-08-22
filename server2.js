const express = require('express');
const path = require('path'); // Node.js module for working with file paths

const app = express();

// Define a route that serves the index.html file
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
