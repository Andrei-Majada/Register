import { UserInputError } from "apollo-server-express";
import { Request } from 'express';

import { RegisteredTime } from "../../entities/RegisteredTime";
import { verifyToken } from "../../validators/authToken";

export default async function adminList(context: { req: Request }) {
  const user = await verifyToken(context.req);

  if (!user || user.role !== "admin") throw new UserInputError('user not authorized');

  const registers = await RegisteredTime.find();

  return registers;
}