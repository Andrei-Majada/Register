import { Field, InputType } from 'type-graphql';

@InputType()
export class RegisterTimeUpdateI {
  @Field({ nullable: true})
  userId?: number

  @Field({ nullable: true})
  timeRegistered?: string
}