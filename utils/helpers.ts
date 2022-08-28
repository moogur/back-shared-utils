import { readFileSync } from 'node:fs';

import { replace } from 'lodash';

export function getVersion(filePath: string) {
  try {
    const data: { version?: string } = JSON.parse(readFileSync(filePath, 'utf8'));
    const version = data?.version;
    if (typeof version !== 'string') throw new Error('Version not found');

    return replace(version, /[\sv]/g, '');
  } catch (error) {
    console.log(error);

    return '0.0.0';
  }
}
