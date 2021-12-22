import { UserInputError } from "apollo-server-express";
import { User } from "../../entities/User"

export interface UserShowI {
  userId: number
}

export default async function show({ userId }: UserShowI) {

  const user = await User.findOne({ id: userId });

  if (!user) throw new UserInputError('User not found.');

  return user;
}