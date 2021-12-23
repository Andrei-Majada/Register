import { Request } from 'express';

import userResolvers from './resolvers/userResolvers';
import registerResolvers from './resolvers/registerResolvers';
import helloResolver from './resolvers/helloResolver';

import { UserI } from './resolvers/userResolvers/create';
import { UserUpdateI } from './resolvers/userResolvers/update';
import { UserDestroyI } from './resolvers/userResolvers/destroy';
import { UserShowI } from './resolvers/userResolvers/show';
import { RegisterI } from './resolvers/registerResolvers/create';
import { RegisterUpdateI } from './resolvers/registerResolvers/update';
import { RegisterDestroyI } from './resolvers/registerResolvers/destroy';
import { RegisterEmployeeListI } from './resolvers/registerResolvers/employeeList';

interface ContextI {
  req: Request;
}

export default {

  Query: {
    hello: () => helloResolver(),
    listUsers: (parent: unknown, args: unknown, context: ContextI) => userResolvers.list(context),
    showUser: (parent: unknown, args: UserShowI, context: ContextI) => userResolvers.show(args, context),
    listAdminRegister: (parent: unknown, args: unknown, context: ContextI) => registerResolvers.adminlist(context),
    listEmployeeRegister: (parent: unknown, args: RegisterEmployeeListI, context: ContextI) => registerResolvers.employeeList(args, context),
  },

  Mutation: {
    createUser: (parent: unknown, args: UserI) => userResolvers.create(args),
    updateUser: (parent: unknown, args: UserUpdateI, context: ContextI) => userResolvers.update(args, context),
    destroyUser: (parent: unknown, args: UserDestroyI, context: ContextI) => userResolvers.destroy(args, context),
    createRegister: (parent: unknown, args: RegisterI, context: ContextI) => registerResolvers.create(args, context),
    updateRegister: (parent: unknown, args: RegisterUpdateI, context: ContextI) => registerResolvers.update(args, context),
    destroyRegister: (parent: unknown, args: RegisterDestroyI, context: ContextI) => registerResolvers.destroy(args, context),
  }
}