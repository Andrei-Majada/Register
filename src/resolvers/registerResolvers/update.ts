import { UserInputError } from "apollo-server-express";
import { RegisteredTime } from "../../entities/RegisteredTime"

export interface RegisterUpdateI {
  registerId: number
  userId?: number
  timeRegistered: string
}

export default async function update({ registerId, userId, timeRegistered}: RegisterUpdateI) {
  const register = await RegisteredTime.findOne({ id: registerId });

  if (!register) throw new UserInputError('Register not found.');

  if (timeRegistered) register.timeRegistered = timeRegistered;

  return register.save();
}