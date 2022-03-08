const express = require('express');
const app = express()
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Joel Duran Tercero');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})