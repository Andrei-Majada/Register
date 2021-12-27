import { Request } from 'express';

import userResolvers from './resolvers/userResolvers';
import registerResolvers from './resolvers/registerResolvers';

import { UserI } from './resolvers/userResolvers/create';
import { RegisterI } from './resolvers/registerResolvers/create';
import { LoginI } from './resolvers/userResolvers/login';

interface ContextI {
  req: Request;
}

export default {

  Query: {
    listAdminRegister: (parent: unknown, args: unknown, context: ContextI) => registerResolvers.adminlist(context),
    listEmployeeRegister: (parent: unknown, args: unknown, context: ContextI) => registerResolvers.employeeList(context),
  },

  Mutation: {
    createUser: (parent: unknown, args: UserI) => userResolvers.create(args),
    createRegister: (parent: unknown, args: RegisterI, context: ContextI) => registerResolvers.create(args, context),
    login: (parent: unknown, args: LoginI) => userResolvers.login(args),
  }
}