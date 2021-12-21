import { createConnection } from "typeorm";
import path from "path";

export const connect = async () => {
  await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'register',
    entities: [
      path.join(__dirname, '/entities/**/**.ts'),
    ],
    synchronize: true,
  });

  console.log("Database connected.");
}