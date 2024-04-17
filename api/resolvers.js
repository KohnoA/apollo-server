import { toures, rooms } from './_db.js';
import { pagination } from './helpers.js';

export const resolvers = {
  Query: {
    toures: (_, { offset, limit, filter }) => {
      const filteredToures = filter
        ? toures.filter((toure) =>
            toure.name.toLowerCase().startsWith(filter.toLowerCase())
          )
        : toures;
      const items = pagination(filteredToures, offset, limit);
      const isEnd = offset + limit < filteredToures.length;

      return {
        info: {
          next: isEnd,
          count: items?.length ? toures.length : null,
        },
        items,
      };
    },
    rooms: (_, { offset, limit }) => {
      const items = pagination(rooms, offset, limit);
      const isEnd = offset + limit < rooms.length;

      return {
        info: {
          next: isEnd,
          count: items.length || null,
        },
        items,
      };
    },
    room: (_, { id }) => {
      const currentRoom = rooms.find((room) => room.id === id);

      return currentRoom ?? null;
    },
    locations: () => {
      return toures.map((toure) => toure.name);
    },
  },
};
