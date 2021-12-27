import jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server-express";
import { Request } from 'express';

export async function verifyToken(req: Request) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const key = String(process.env.SECRET_KEY);
        const user = jwt.verify(token, key);
        if (!user) throw new AuthenticationError("Invalid/Espired token");
        const decoded = jwt.decode(token, {complete: true})
        return decoded?.payload;
      } catch (error) {
        throw new AuthenticationError("Invalid/Espired token");
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error("Authorization header must be provided");
}