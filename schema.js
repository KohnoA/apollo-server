export const typeDefs = `#graphql
  type Toures {
    currency: String!,
    name: String!,
    flag: String!,
    language: String!,
    toure: String!, 
  }

  type Rooms {
    id: Int!,
    thumbnail: String!,
    available: Boolean!,
    title: String!,
    price: String!,
    review: Int!,
    desc: String!,
    preview: [String!]!,
  }

  type Info {
    count: Int,
    next: Boolean!,
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
    toures(offset: Int, limit: Int): ToureReturn!,
    rooms(offset: Int, limit: Int): RoomsReturn!,
    room(id: Int!): Rooms,
  }
`;