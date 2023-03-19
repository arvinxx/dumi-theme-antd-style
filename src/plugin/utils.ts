import { createHash } from 'crypto';

export const getHash = (str: string, length = 8) =>
  createHash('md4').update(str).digest('hex').slice(0, length);
