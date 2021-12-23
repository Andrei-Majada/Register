import { UserInputError } from 'apollo-server-express';
import { Request } from 'express';
import admin from 'firebase-admin';
import { resourceLimits } from 'worker_threads';

interface CreateUserI {
  name: string
  email: string
  password: string
}

interface UserByEmailI {
  email: string
}

interface VerifyTokenI {
  accessToken: string
}

export const getAuthToken = (req: Request) => {
  const authToken = req.headers.authorization;

  if (!authToken) throw new UserInputError('Not authorized.');

  const [bearer, token] = authToken.split(' ');

  if(bearer !== 'Bearer') throw new UserInputError('Not authorized.');

  return token;
}

export const createUser = async ({
  name, email, password
}: CreateUserI) => {
  const { uid } = await admin
  .auth()
  .createUser({
    displayName: name,
    email,
    password,
  });

  const userId = String(uid);
  return userId;
}

export const getUserByEmail = async ({ email }: UserByEmailI) => {
  const user = await admin.auth().getUserByEmail(email);
  return user ? true : false;
}

export const verifyToken = async ({ accessToken }: VerifyTokenI) => {
  const checkRevoked = true;

  const { uid } = await admin.auth().verifyIdToken(accessToken, checkRevoked);

  const userId = String(uid);
  return userId;
}