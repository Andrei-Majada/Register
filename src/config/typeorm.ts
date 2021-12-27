import { createConnection } from "typeorm";
import { User } from '../entities/User';
import { RegisteredTime } from '../entities/RegisteredTime';

// as informações de conexão comentadas podem ser alteradas conforme suas credenciais de acesso ao banco local.
// estas são as corretas para a conexão com o banco no exemplo com container docker.
export const connect = async () => {
  await createConnection({
    type: 'mysql', // tipo de conexão
    host: 'localhost', //host
    port: 3306, //porta padrão
    username: 'root', //usuario de acesso
    password: 'root', //senha 
    database: 'register', //nome da base de dados
    entities: [User, RegisteredTime],
    synchronize: true,
  });

  console.log("Database connected.");
}