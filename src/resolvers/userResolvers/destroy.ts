import { UserInputError } from "apollo-server-express";
import { User } from "../../entities/User"

export interface UserDestroyI {
  userId: number
}

export default async function destroy({ userId }: UserDestroyI) {
  const user = await User.findOne({ id: userId});

  if (!user) throw new UserInputError('user not found');

  await user.softRemove();

  return true;
}