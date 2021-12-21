import 'reflect-metadata';
import { startServer } from './server';
import dotenv from "dotenv";

import { connect } from './config/typeorm';

const start = async () => {
  dotenv.config({})

  connect();

  const app = await startServer();

  app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}.`);
  });
}

start();