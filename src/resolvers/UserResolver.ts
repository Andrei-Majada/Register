import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { User } from '../entities/User';
import { UserI } from '../interfaces/UserI';
import { UserUpdateI } from '../interfaces/UserUpdateI';

@Resolver()
export class UserResolver {

  @Mutation(() => Boolean)
  async createUser(
    @Arg("user", () => UserI) user: UserI
  ) {
    await User.create(user).save();
    return true;
  }

  @Mutation(() => Boolean)
  async deleteUser(
    @Arg("userId") userId: number
  ) {
    await User.delete(userId);
    return true;
  }

  @Mutation(() => Boolean)
  async updateUser(
    @Arg("userId") userId: number,
    @Arg("user", () => UserUpdateI) user: UserUpdateI
  ) {
    await User.update(userId, user);
    return true;
  }

  @Query(() => [User])
  async users() {
    return User.find();
  }
}