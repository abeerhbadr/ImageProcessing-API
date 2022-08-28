import express, { Application, NextFunction, Request, Response } from 'express';
import imageRouter from './routes/API';

const app: Application = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log('route root');
  res.send('hii');
});

app.use('/api', imageRouter);

app.listen(port, () => {
  console.log(`Server is Listening on Port ${port}`);
});
