import { Field, InputType } from 'type-graphql';

@InputType()
export class UserI {
  @Field()
  name: string

  @Field()
  email: string

  @Field()
  password: string

  @Field()
  role: string
}