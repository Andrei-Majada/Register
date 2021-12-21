import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import "reflect-metadata";

import { buildSchema } from 'type-graphql';

import { HelloResolver } from './resolvers/check';

export const startServer = async () => {
  const app = express();

  const server = await new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver]
    }),
    context: ({req, res}) => ({req, res}),
  });

  await server.start();

  server.applyMiddleware({app, path: '/api' });

  return app;
}