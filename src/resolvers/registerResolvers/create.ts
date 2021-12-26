import { UserInputError } from "apollo-server-express";
import { Request } from 'express';

import { RegisteredTime } from "../../entities/RegisteredTime"
import { verifyToken } from "../../validators/authToken";

export interface RegisterI {
  timeRegistered: string
}

export default async function create({ timeRegistered }: RegisterI, context: { req: Request }) {
  const user = await verifyToken(context.req);

  if (!user || user.role !== "employee") throw new UserInputError('user not authorized');

  const newRegister = await RegisteredTime.create({ userId: user.id, timeRegistered });

  return newRegister.save();
}