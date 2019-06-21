const express = require('express');
const childProcess = require('child_process');
const app = express();
const port = 8888;

app.get('/', (req, res) => {
  childProcess.exec('gnubg -h', (err, stdout, stderr) => {
    if (err) {
      res.send(`There was an error!`);
    }
    res.send(`Here's the output: \n ${stdout}`)
  })
});

app.listen(port, () => console.log('Listening on port:', port));