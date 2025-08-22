import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
  res.send('CareerPath backend is up and running!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});