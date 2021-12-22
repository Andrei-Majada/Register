import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import "reflect-metadata";

import { buildSchema } from 'type-graphql';

import { HelloResolver } from './resolvers/Check';
import { UserResolver } from './resolvers/UserResolver';
import { RegisterTimeResolver } from './resolvers/RegisterTimeResolvers'

export const startServer = async () => {
  const app = express();

  const server = await new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver, RegisterTimeResolver]
    }),
    context: ({req, res}) => ({req, res}),
  });

  await server.start();

  server.applyMiddleware({app, path: '/api' });

  return app;
}