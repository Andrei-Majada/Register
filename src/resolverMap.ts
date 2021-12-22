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
import { RegisterAdminListI } from './resolvers/registerResolvers/adminList';
import { RegisterEmployeeListI } from './resolvers/registerResolvers/employeeList';

interface ContextI {
  req: Request;
}

export default {

  Query: {
    hello: () => helloResolver(),
    listUsers: () => userResolvers.list(),
    showUser: (parent: unknown, args: UserShowI) => userResolvers.show(args),
    listAdminRegister: (parent: unknown, args: RegisterAdminListI) => registerResolvers.adminlist(args),
    listEmployeeRegister: (parent: unknown, args: RegisterEmployeeListI) => registerResolvers.employeeList(args),
  },

  Mutation: {
    createUser: (parent: unknown, args: UserI) => userResolvers.create(args),
    updateUser: (parent: unknown, args: UserUpdateI) => userResolvers.update(args),
    destroyUser: (parent: unknown, args: UserDestroyI) => userResolvers.destroy(args),
    createRegister: (parent: unknown, args: RegisterI) => registerResolvers.create(args),
    updateRegister: (parent: unknown, args: RegisterUpdateI) => registerResolvers.update(args),
    destroyRegister: (parent: unknown, args: RegisterDestroyI) => registerResolvers.destroy(args),
  }
}