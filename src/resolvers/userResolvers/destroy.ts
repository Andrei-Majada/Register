import { UserInputError } from "apollo-server-express";
import { Request } from 'express';
import { User } from "../../entities/User"
import { verifyToken, getAuthToken } from "../../services/firebaseAuth";

export interface UserDestroyI {
  userId: number
}

export default async function destroy({ userId }: UserDestroyI, context: { req: Request }) {
  const accessToken = await getAuthToken(context.req);

  const firebaseId = await verifyToken({ accessToken });

  const user = await User.findOne({ firebaseId });

  if (!user || user.role !== "admin") throw new UserInputError('user not authorized');

  const userResult = await User.findOne({ id: userId });

  if (!userResult) throw new UserInputError('user not found');

  await userResult.softRemove();

  return true;
}