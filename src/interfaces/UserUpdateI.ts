import { Field, InputType } from 'type-graphql';

@InputType()
export class UserUpdateI {
  @Field({ nullable: true})
  name?: string

  @Field({ nullable: true})
  email?: string

  @Field({ nullable: true})
  password?: string

  @Field({ nullable: true})
  role?: string
}