import { UserInputError } from "apollo-server-express";
import { RegisteredTime } from "../../entities/RegisteredTime"
import { Request } from 'express';
import { User } from "../../entities/User"
import { verifyToken, getAuthToken } from "../../services/firebaseAuth";

export interface RegisterDestroyI {
  registerId: number
}

export default async function destroy({ 
  registerId }: RegisterDestroyI, context: { req: Request }) {
    const accessToken = await getAuthToken(context.req);

    const firebaseId = await verifyToken({ accessToken });
  
    const user = await User.findOne({ firebaseId });
  
    if (!user || user.role !== "admin") throw new UserInputError('user not authorized');

  const register = await RegisteredTime.findOne({ id: registerId });

  if (!register) throw new UserInputError('Register not found.');

  await register.softRemove();

  return true;
}