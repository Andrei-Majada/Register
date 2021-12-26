import { UserInputError } from "apollo-server-express";
import bcrypt from "bcryptjs";
import jwt from  "jsonwebtoken";

import { User } from "../../entities/User"

export interface LoginI {
  email: string
  password: string
}

interface TokenI {
  id: number
  name: string
  email: string
  role: string
}

function generateToken({ id, name, email, role }: TokenI) {
  return jwt.sign(
    {
      id,
      name,
      email,
      role
    },
    String(process.env.SECRET_KEY),
    { expiresIn: "8h" }
  );
}

export default async function login({
  email,
  password,
}: LoginI) {
  const user = await User.findOne({ email });

  if (!user) throw new UserInputError('User not found.');

  const match = await bcrypt.compare(password, user.password);

  if (!match) throw new UserInputError('Wrong credentials.');

  const token = generateToken(user);

  return {
    name: user.name,
    email: user.email,
    role: user.role,
    token,
  };
}