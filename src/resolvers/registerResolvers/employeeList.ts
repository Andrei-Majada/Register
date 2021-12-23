import { UserInputError } from "apollo-server-express";
import { Request } from 'express';

import { User } from "../../entities/User"
import { verifyToken, getAuthToken } from "../../services/firebaseAuth";
import { RegisteredTime } from "../../entities/RegisteredTime";

export interface RegisterEmployeeListI {
  userId: number
}

export default async function employeeList({ userId }: RegisterEmployeeListI, context: { req: Request}) {

  const accessToken = await getAuthToken(context.req);

  const firebaseId = await verifyToken({ accessToken });

  const user = await User.findOne({ firebaseId });

  if (!user) throw new UserInputError('user not authorized');

  const userRepository = await User.findOne({ id: userId });

  if (!userRepository) throw new UserInputError('User not found.');

  if (userRepository.firebaseId !== firebaseId) throw new UserInputError('User not match, you cant see this register.');

  const registers = await RegisteredTime.find({ userId });

  if (!registers) throw new UserInputError('Register not found.');

  return registers;
}