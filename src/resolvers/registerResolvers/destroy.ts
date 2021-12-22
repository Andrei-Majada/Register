import { UserInputError } from "apollo-server-express";
import { RegisteredTime } from "../../entities/RegisteredTime"

export interface RegisterDestroyI {
  registerId: number
}

export default async function destroy({ registerId }: RegisterDestroyI) {
  const register = await RegisteredTime.findOne({ id: registerId });

  if (!register) throw new UserInputError('Register not found.');

  await register.softRemove();

  return true;
}