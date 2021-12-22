import { RegisteredTime } from "../../entities/RegisteredTime"

export interface RegisterI {
  userId: number
  timeRegistered: string
}

export default async function create({ userId, timeRegistered}: RegisterI) {
  const newRegister = await RegisteredTime.create({ userId, timeRegistered });

  return newRegister.save();
}