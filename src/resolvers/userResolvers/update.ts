import { UserInputError } from "apollo-server-express";
import { User } from "../../entities/User"

export interface UserUpdateI {
  userId: number
  name?: string
  email?: string
  password?: string
  role?: string
}

export default async function update(
  args: UserUpdateI,
  ) {

  const { userId, name, email, password, role } = args;

  const user = await User.findOne({ id: userId });

  if (!user) throw new UserInputError('User not found.');

  if (name) user.name = name;
  if (email) user.email = email;
  if (password) user.password = password;
  if (role) user.role = role;

  return user.save();
}