import { createConnection } from "typeorm";
import { User } from '../entities/User';
import { RegisteredTime } from '../entities/RegisteredTime';

export const connect = async () => {
  await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'register',
    entities: [User, RegisteredTime],
    synchronize: true,
  });

  console.log("Database connected.");
}