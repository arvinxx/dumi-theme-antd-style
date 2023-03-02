import { createHash } from 'crypto';

export const getHash = (str: string) => createHash('md5').update(str).digest('base64url');
