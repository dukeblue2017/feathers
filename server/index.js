const express = require('express');
const app = express();

app.listen(8000, () => console.log('Server running on port 8000'));

app.get('/', (req, res) => {
  res.send('test');
})

app.post('/login', (req, res) => {
  console.log('req:', req)
})