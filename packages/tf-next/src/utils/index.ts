import { join } from 'path';
import { existsSync } from 'fs';

// Looks for a `package.json` or `next.config.[m]js` file in cwd and
// returns the result as a relative path to the basePath
export function findEntryPoint(cwd: string) {
  for (const entrypoint of ['package.json', 'next.config.js', 'next.config.mjs']) {
    if (existsSync(join(cwd, entrypoint))) {
      return entrypoint;
    }
  }

  throw new Error(`No package.json or next.config.[m]js could be found in ${cwd}`);
}
