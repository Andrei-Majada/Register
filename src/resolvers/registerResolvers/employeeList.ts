import { UserInputError } from "apollo-server-express";
import { Request } from 'express';

import { RegisteredTime } from "../../entities/RegisteredTime";
import { verifyToken } from "../../services/authToken";

export default async function employeeList(context: { req: Request }) {
  const user = await verifyToken(context.req);

  if (!user) throw new UserInputError('Invalid token.');

  const registers = await RegisteredTime.find({ userId: user.id });

  if (!registers) throw new UserInputError('Register not found.');

  return registers;
}