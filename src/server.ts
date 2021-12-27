import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import "reflect-metadata";
import schemas from './schemas';
import resolverMap from './resolverMap';

export const startServer = async () => {
  const app = express();

  const server = await new ApolloServer({
    typeDefs: schemas,
    resolvers: resolverMap,
    context: ({req, res}) => ({req, res}),
  });

  await server.start();

  server.applyMiddleware({app, path: '/api' });

  return app;
}