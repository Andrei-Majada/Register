import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
@ObjectType()
@Entity("user")
export class User extends BaseEntity{
  @Field()
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
}