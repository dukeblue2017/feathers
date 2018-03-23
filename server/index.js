const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.listen(8000, () => console.log('Server running on port 8000'));

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('test');
})

app.post('/login', (req, res) => {
  console.log('req:', req.body)
  res.end();
})