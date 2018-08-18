// tslint:disable:no-console
import chalk from 'chalk';
import * as chokidar from 'chokidar';
import { noop } from 'common/utils/noop';

export const watch = (silent = false) => {
  const log = (...text: string[]) =>
    silent ? noop : console.log(chalk.blueBright('✨ ', ...text));

  const watcher = chokidar.watch(['src/common', 'src/server'], {
    ignored: /[\/\\]\.|node_modules/,
    persistent: true,
    ignoreInitial: true,
    usePolling: true
  });

  watcher.on('ready', () => {
    log('Server hot reloading service started');
    watcher.on('all', () => {
      log('Clearing module cache:');
      Object.keys(require.cache).forEach(id => {
        if (/[\/\\](server|common)[\/\\]/.test(id)) {
          log('  ', id);
          delete require.cache[id];
        }
      });
      log('---');
    });
  });

  return watcher.close;
};
