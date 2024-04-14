const DEFAULT_PAGE_SIZE = 10;

export function pagination(arr, offset = 0, limit = DEFAULT_PAGE_SIZE) {
  if (!Array.isArray(arr) || arr.length === 0) return;

  return arr.slice(offset, offset + limit);
}
