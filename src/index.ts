import 'reflect-metadata';
import { startServer } from './server';
import dotenv from "dotenv";


const start = async () => {
  dotenv.config({})

  const app = await startServer();

  app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}.`);
  });
}

start();