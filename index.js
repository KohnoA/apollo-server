import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Toures {
    name: String,
    flag: String
  }

  type Rooms {
    thumbnail: String,
    available: Boolean,
    title: String,
    price: String,
  }

  type Query {
    toures: [Toures],
    locations: [String],
    rooms: [Rooms]
  }
`;

export const toures = [
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

const rooms = [
  {
    thumbnail: 'https://ibb.co/PWpkQ6Z',
    available: true,
    title: 'The Royal Room',
    price: '₦190,000',
  },
  {
    thumbnail: 'https://ibb.co/GsKgmpL',
    available: true,
    title: 'The Royal Room',
    price: '₦195,000',
  },
  {
    thumbnail: 'https://ibb.co/sbX7mQF',
    available: true,
    title: 'The Royal Room',
    price: '₦200,000',
  },
  {
    thumbnail: 'https://ibb.co/GsKgmpL',
    available: true,
    title: 'The Royal Room',
    price: '₦180,000',
  },
  {
    thumbnail: 'https://ibb.co/GsKgmpL',
    available: true,
    title: 'The Royal Room',
    price: '₦195,000',
  },
  {
    thumbnail: 'https://ibb.co/sbX7mQF',
    available: true,
    title: 'The Royal Room',
    price: '₦200,000',
  },
  {
    thumbnail: 'https://ibb.co/PWpkQ6Z',
    available: true,
    title: 'The Royal Room',
    price: '₦190,000',
  },
  {
    thumbnail: 'https://ibb.co/GsKgmpL',
    available: true,
    title: 'The Royal Room',
    price: '₦195,000',
  },
  {
    thumbnail: 'https://ibb.co/sbX7mQF',
    available: true,
    title: 'The Royal Room',
    price: '₦200,000',
  },
  {
    thumbnail: 'https://ibb.co/GsKgmpL',
    available: true,
    title: 'The Royal Room',
    price: '₦180,000',
  },
  {
    thumbnail: 'https://ibb.co/GsKgmpL',
    available: true,
    title: 'The Royal Room',
    price: '₦195,000',
  },
  {
    thumbnail: 'https://ibb.co/sbX7mQF',
    available: true,
    title: 'The Royal Room',
    price: '₦200,000',
  },
];

const resolvers = {
  Query: {
    toures: () => toures,
    rooms: () => rooms,
    locations: () => {
      return toures.map((toure) => toure.name);
    }
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