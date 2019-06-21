const express = require('express');
const childProcess = require('child_process');
const app = express();
const port = process.env.NODE_ENV === 'production' ? 80 : 8888;

app.get('/', (req, res) => {
  console.log(req.query);
  childProcess.exec(`gnubg -${req.query.cmd}`, (err, stdout, stderr) => {
    if (err) {
      res.send(`There was an error! \n${stderr}`);
      return;
    }
    res.send(`Here's the output: \n${stdout}`)
  })
});

app.listen(port, () => console.log('Listening on port:', port));