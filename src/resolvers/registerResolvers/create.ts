import { UserInputError } from "apollo-server-express";
import { Request } from 'express';

import { User } from '../../entities/User';
import { RegisteredTime } from "../../entities/RegisteredTime"
import { verifyToken } from "../../validators/authToken";

export interface RegisterI {
  timeRegistered: string
}

export default async function create({ timeRegistered }: RegisterI, context: { req: Request }) {
  const user = await verifyToken(context.req);

  if (!user || user.role !== "employee") throw new UserInputError('user not authorized');

  const findResult = await User.findOne({ id: user.id });

  if (!findResult) throw new UserInputError('user not found.');

  const newRegister = await RegisteredTime.create({ userId: user.id, username: findResult.name, timeRegistered });

  return newRegister.save();
}