export const typeDefs = `#graphql
  type Toures {
    name: String,
    flag: String
  }

  type Rooms {
    id: Int!,
    thumbnail: String!,
    available: Boolean!,
    title: String!,
    price: String!,
  }

  type Info {
    count: Int,
  }

  type RoomsReturn {
    info: Info!,
    items: [Rooms!]!,
  }

  type ToureReturn {
    info: Info!,
    items: [Toures!]!
  }

  type Query {
    locations: [String!]!,
    toures(offset: Int, limit: Int): ToureReturn,
    rooms(offset: Int, limit: Int): RoomsReturn,
  }
`;