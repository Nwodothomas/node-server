const fs = require('fs');

// Read from a file
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;

  // Write to another file
  fs.writeFile('output.txt', data, (err) => {
    if (err) throw err;
    console.log('File data copied!');
  });
});
