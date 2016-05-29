import express from 'express';
import { apolloServer } from 'graphql-tools';
import Schema from './data/schema';
import Mocks from './data/mocks';
import cors from 'cors';

const GRAPHQL_PORT = 8081;

const graphQLServer = express().use('*', cors());

graphQLServer.use('/', apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  mocks: Mocks
}));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));
