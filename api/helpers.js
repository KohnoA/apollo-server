const DEFAULT_PAGE_SIZE = 10;

export function pagination(arr, offset = 0, limit = DEFAULT_PAGE_SIZE) {
  if (!Array.isArray(arr) || arr.length === 0) return;

  return arr.slice(offset, offset + limit);
}

export const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  await fn(req, res);
};