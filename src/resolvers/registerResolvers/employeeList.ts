import { UserInputError } from "apollo-server-express";
import { User } from "../../entities/User"
import { RegisteredTime } from "../../entities/RegisteredTime";

export interface RegisterEmployeeListI {
  userId: number
}

export default async function employeeList({ userId }: RegisterEmployeeListI) {
  const user = await User.findOne({ id: userId });

  if (!user) throw new UserInputError('User not found.');

  const registers = await RegisteredTime.find({ userId });

  if (!registers) throw new UserInputError('Register not found.');

  return registers;
}