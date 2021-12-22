import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Timestamp, ManyToOne } from 'typeorm';
import { Field, ObjectType, Int } from 'type-graphql';
import { User } from './User';

@ObjectType()
@Entity("registeredTime")
export class RegisteredTime extends BaseEntity{
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => Int)
  @Column()
  userId!: number;

  @Field()
  @Column({ type: 'timestamp' })
  timeRegistered!: string

  @ManyToOne(type => User, user => user.id)
  user: User[];
}