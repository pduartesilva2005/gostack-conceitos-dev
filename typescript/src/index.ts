import express from 'express';
import { helloWorld } from './routes';

const app = express();

app.get('/', helloWorld);

app.listen(3333, () => {
  console.log('Server Started at http://localhost:3333');
});
