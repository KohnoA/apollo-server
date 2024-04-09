import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Country {
    name: String,
    flag: String
  }

  type Query {
    countries: [Country]
  }
`;

export const countries = [
  {
    name: 'Brazil',
    flag: 'https://ibb.co/8N3Lfhn'
  },
  {
    name: 'Belarus',
    flag: 'https://ibb.co/8N3Lfhn'
  },
  {
    name: 'Ukraine',
    flag: 'https://ibb.co/8N3Lfhn'
  },
  {
    name: 'Poland',
    flag: 'https://ibb.co/8N3Lfhn'
  },
  {
    name: 'France',
    flag: 'https://ibb.co/8N3Lfhn'
  },
];

const resolvers = {
  Query: {
    countries: () => countries,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 },
});

console.log(`🚀  Server ready at: ${url}`);