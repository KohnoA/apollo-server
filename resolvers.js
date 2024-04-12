import { toures, rooms } from './_db.js';
import { pagination } from './helpers.js';

export const resolvers = {
  Query: {
    toures: (_, { offset, limit }) => {
      const items = pagination(toures, offset, limit);

      return {
        info: {
          count: items.length || null,
        },
        items,
      };
    },
    rooms: (_, { offset, limit }) => {
      const items = pagination(rooms, offset, limit);

      return {
        info: {
          count: items.length || null,
        },
        items
      };
    },
    locations: () => {
      return toures.map((toure) => toure.name);
    }
  },
};