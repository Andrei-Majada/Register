import { UserInputError } from "apollo-server-express";
import { User } from "../../entities/User"

export default async function list() {
  const users = await User.find();

  if (!users) throw new UserInputError('cant find any user.');

  return users;
}