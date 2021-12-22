import { UserInputError } from "apollo-server-express";
import { User } from "../../entities/User"

export interface UserI {
  name: string
  email: string
  password: string
  role: string
}

export default async function create({
  name,
  email,
  password,
  role
}: UserI) {
  const findUser = await User.findOne({email});

  if (findUser) {
    throw new UserInputError('This email has already been registered.');
  } else {
    const newUser = await User.create({name, email, password, role});

    return newUser.save();
  }
}