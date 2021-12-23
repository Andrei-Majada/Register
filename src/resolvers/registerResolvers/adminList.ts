import { UserInputError } from "apollo-server-express";
import { Request } from 'express';

import { User } from "../../entities/User"
import { verifyToken, getAuthToken } from "../../services/firebaseAuth";
import { RegisteredTime } from "../../entities/RegisteredTime";

export default async function adminList(context: { req: Request}) {
  const accessToken = await getAuthToken(context.req);

  const firebaseId = await verifyToken({ accessToken });

  const user = await User.findOne({ firebaseId });

  if (!user || user.role !== "admin") throw new UserInputError('user not authorized');

  const registers = await RegisteredTime.find();

  return registers;
}