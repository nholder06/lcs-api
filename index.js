import express from 'express';

const app = express();
const port = 5000;

app.get('/', function(req, res) {
  res.send('Get request to homepage');
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
