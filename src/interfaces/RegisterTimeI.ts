import { Field, InputType } from 'type-graphql';

@InputType()
export class RegisterTimeI {
  @Field()
  userId: number

  @Field()
  timeRegistered: string
}