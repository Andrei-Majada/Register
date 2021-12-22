import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, OneToMany } from 'typeorm';
import { Field, ObjectType, Int } from 'type-graphql';
import { RegisteredTime } from './RegisteredTime';

@ObjectType()
@Entity("user")
export class User extends BaseEntity{
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  name!: string

  @Field(() => String)
  @Column()
  email!: string

  @Field()
  @Column()
  password!: string

  @Field(() => String)
  @Column()
  role!: string

  @Field()
  @CreateDateColumn({ type: 'timestamp'})
  createdAt!: string

  @OneToMany(type => RegisteredTime, registeredTime => registeredTime.userId)
  registeredTime: RegisteredTime[];
}