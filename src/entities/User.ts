import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string

  @Column()
  email!: string

  @Column()
  password!: string

  @Column()
  role!: boolean

  @CreateDateColumn({ type: 'timestamp'})
  createdAt!: string
}











//id, name, email, password, role