import { toures, rooms } from './_db.js';
import { pagination } from './helpers.js';

export const resolvers = {
  Query: {
    toures: (_, { offset, limit }) => {
      const items = pagination(toures, offset, limit);
      const isEnd = offset + limit < rooms.length;

      return {
        info: {
          next: isEnd,
          count: items.length ? rooms.length : null,
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
          count: items.length ? rooms.length : null,
        },
        items
      };
    },
    room: (_, { id }) => {
      const currentRoom = rooms.find((room) => room.id === id);

      return currentRoom ?? null;
    },
    locations: () => {
      return toures.map((toure) => toure.name);
    }
  },
};