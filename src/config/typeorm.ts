import { createConnection } from "typeorm";
import { User } from '../entities/User';

export const connect = async () => {
  await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'register',
    entities: [User],
    synchronize: true,
  });

  console.log("Database connected.");
}