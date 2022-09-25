import childProcess from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

import { forEach, split, trim, replace, keys, reduce, assign } from 'lodash';

export function exec(command: string) {
  try {
    return trim(childProcess.execSync(command).toString());
  } catch {
    return '';
  }
}

function getKeyAndValue(line: string) {
  const trimmedLine = trim(line);
  if (!trimmedLine || trimmedLine[0] === '#') return [];

  return split(trimmedLine, '=');
}

export function setVariablesOutOfEnvironmentString(content: string) {
  const lines = split(content, '\n');
  forEach(lines, (line) => {
    const [key, value] = getKeyAndValue(line);
    if (!key || !value) return;
    process.env[key] = value;
  });
}

export function setEnvironments(...filePaths: string[]) {
  forEach(filePaths, (filePath) => {
    try {
      const content = readFileSync(filePath, 'utf8');
      setVariablesOutOfEnvironmentString(content);
    } catch (error) {
      console.log(error);
      throw error;
    }
  });
}

export function saveEnvironmentsInFile(filePath: string, data: Record<string, string | number | boolean>) {
  try {
    let content = readFileSync(filePath, 'utf8');
    forEach(keys(data), (key) => {
      content = replace(content, new RegExp(`(?<=${key}=).*(?=\n)`), data[key]?.toString() ?? '');
    });
    writeFileSync(filePath, content, { encoding: 'utf8' });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export function getObjectEnvironments(content: string) {
  return reduce<string, Record<string, string>>(
    split(content, '\n'),
    (accumulator, line) => {
      const [key, value] = getKeyAndValue(line);
      if (key && value) accumulator[key] = value;

      return accumulator;
    },
    {},
  );
}

export function getEnvironmentsFromFiles(...filePaths: string[]) {
  return reduce<string, Record<string, string>>(
    filePaths,
    (accumulator, filePath) => {
      try {
        const content = readFileSync(filePath, 'utf8');

        assign(accumulator, getObjectEnvironments(content));
      } catch (error) {
        console.log(error);
      } finally {
        return accumulator;
      }
    },
    {},
  );
}
