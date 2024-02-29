const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const staticData = {
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
  ]
};

const dynamicData = () => ({
  timestamp: new Date(),
  randomNumber: Math.floor(Math.random() * 100)
});

app.get('/api/static', (req, res) => {
  res.json(staticData);
});

app.get('/api/dynamic', (req, res) => {
  res.json(dynamicData());
});

app.listen(port, () => {
  console.log(`json-mock-server listening at http://localhost:${port}`);
});
