import { UserInputError } from "apollo-server-express";
import { User } from "../../entities/User"
import { createUser, getUserByEmail, verifyToken } from "../../services/firebaseAuth";

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
    // const findUserService = await getUserByEmail({ email });

    // if (findUserService) throw new UserInputError('This email has already been registered.');

    const firebaseId = await createUser({ name, email, password });

    if (firebaseId === null) throw new UserInputError('Error while creating user in firebase.');

    const newUser = await User.create({ name, email, password, firebaseId, role});

    return newUser.save();
  }
}