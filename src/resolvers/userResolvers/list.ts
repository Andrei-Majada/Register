import { UserInputError } from "apollo-server-express";
import { Request } from 'express';

import { User } from "../../entities/User"
import { verifyToken, getAuthToken } from "../../services/firebaseAuth";

export default async function list(context: { req: Request}) {

  const accessToken = await getAuthToken(context.req);

  const firebaseId = await verifyToken({ accessToken });

  const user = await User.findOne({ firebaseId });

  if (!user || user.role !== "admin") throw new UserInputError('user not authorized');

  const users = await User.find();

  if (!users) throw new UserInputError('cant find any user.');

  return users;
}