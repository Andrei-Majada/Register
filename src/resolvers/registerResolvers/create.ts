import { UserInputError } from "apollo-server-express";

import { RegisteredTime } from "../../entities/RegisteredTime"
import { Request } from 'express';
import { User } from "../../entities/User"
import { verifyToken, getAuthToken } from "../../services/firebaseAuth";

export interface RegisterI {
  timeRegistered: string
}

export default async function create({ timeRegistered }: RegisterI, context: { req: Request }) {
  const accessToken = await getAuthToken(context.req);

  const firebaseId = await verifyToken({ accessToken });

  const user = await User.findOne({ firebaseId });

  if (!user || user.role !== "employee") throw new UserInputError('user not authorized');

  const userId = Number(user.id);

  const newRegister = await RegisteredTime.create({ userId, timeRegistered });

  return newRegister.save();
}