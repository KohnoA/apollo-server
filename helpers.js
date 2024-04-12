const DEFAULT_PAGE_SIZE = 10;

export function pagination(arr, offset = DEFAULT_PAGE_SIZE, limit = DEFAULT_PAGE_SIZE) {
  if (!Array.isArray(arr) || arr.length === 0) return;

  const start = offset - limit;
  const end = start + limit;

  return arr.slice(start, end);
}
