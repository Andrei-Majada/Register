import { UserInputError } from "apollo-server-express";
import { Request } from 'express';

import { User } from "../../entities/User"
import { verifyToken, getAuthToken } from "../../services/firebaseAuth";

export interface UserUpdateI {
  name?: string
  email?: string
  password?: string
  role?: string
}

export default async function update(
  args: UserUpdateI, context: { req: Request}
  ) {
  const accessToken = await getAuthToken(context.req);

  const firebaseId = await verifyToken({ accessToken });

  const user = await User.findOne({ firebaseId });

  if (!user) throw new UserInputError('user not found.');
  
  const { name, email, password, role } = args;

  if (name) user.name = name;
  if (email) user.email = email;
  if (password) user.password = password;
  if (role) user.role = role;

  return user.save();
}