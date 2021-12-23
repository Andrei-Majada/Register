import { UserInputError } from "apollo-server-express";
import { RegisteredTime } from "../../entities/RegisteredTime"
import { Request } from 'express';
import { User } from "../../entities/User"
import { verifyToken, getAuthToken } from "../../services/firebaseAuth";

export interface RegisterUpdateI {
  registerId: number
  userId?: number
  timeRegistered: string
}

export default async function update({ 
    registerId, userId, timeRegistered
  }: RegisterUpdateI,
  context: { req: Request }
  ) {
  const accessToken = await getAuthToken(context.req);

  const firebaseId = await verifyToken({ accessToken });

  const user = await User.findOne({ firebaseId });

  if (!user || user.role !== "admin") throw new UserInputError('user not authorized');

  const register = await RegisteredTime.findOne({ id: registerId });

  if (!register) throw new UserInputError('Register not found.');

  if (timeRegistered) register.timeRegistered = timeRegistered;

  return register.save();
}