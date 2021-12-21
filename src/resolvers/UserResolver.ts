import { Query, Resolver, Mutation, Arg, Field, InputType } from 'type-graphql';
import { User } from '../entities/User';

@InputType()
class UserI {
  @Field()
  name: string

  @Field()
  email: string

  @Field()
  password: string

  @Field()
  role: string
}

@InputType()
class UserUpdateI {
  @Field({ nullable: true})
  name?: string

  @Field({ nullable: true})
  email?: string

  @Field({ nullable: true})
  password?: string

  @Field({ nullable: true})
  role?: string
}

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