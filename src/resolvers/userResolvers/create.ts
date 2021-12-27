import { UserInputError } from "apollo-server-express";
import bcrypt from "bcryptjs";

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
  const findUserRepository = await User.findOne({email});

  if (findUserRepository) {
    throw new UserInputError('This email has already been registered.');
  } else {
    password = await bcrypt.hash(password, 12);

    const newUser = await User.create({ name, email, password, role});

    return newUser.save();
  }
}