import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { RegisteredTime } from '../entities/RegisteredTime';
import { RegisterTimeI } from '../interfaces/RegisterTimeI';
import { RegisterTimeUpdateI } from '../interfaces/RegisterTimeUpdateI';

@Resolver()
export class RegisterTimeResolver {

  @Mutation(() => Boolean)
  async createRegisterTime(
    @Arg("register", () => RegisterTimeI) register: RegisterTimeI
  ) {
    await RegisteredTime.create(register).save();
    return true;
  }

  @Mutation(() => Boolean)
  async deleteRegisterTime(
    @Arg("resgisterId") resgisterId: number
  ) {
    await RegisteredTime.delete(resgisterId);
    return true;
  }

  @Mutation(() => Boolean)
  async updateRegisterTime(
    @Arg("registerId") registerId: number,
    @Arg("register", () => RegisterTimeUpdateI) register: RegisterTimeUpdateI
  ) {
    await RegisteredTime.update(registerId, register);
    return true;
  }

  @Query(() => [RegisteredTime])
  async registerTime() {
    return RegisteredTime.find();
  }
}