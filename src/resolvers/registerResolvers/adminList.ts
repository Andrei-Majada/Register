import { UserInputError } from "apollo-server-express";
import { User } from "../../entities/User"
import { RegisteredTime } from "../../entities/RegisteredTime";

export interface RegisterAdminListI {
  userId: number
}

export default async function adminList({ userId }: RegisterAdminListI) {
  const user = await User.findOne({ id: userId });

  if (!user) throw new UserInputError('User not found.');

  if (user.role !== 'admin') throw new UserInputError('Must be and admin to see this.');

  const registers = await RegisteredTime.find();

  return registers;
}