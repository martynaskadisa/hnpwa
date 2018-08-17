import chalk from 'chalk';
import * as chokidar from 'chokidar';

export const watch = () => {
  const watcher = chokidar.watch(['src/common', 'src/server'], {
    ignored: /[\/\\]\.|node_modules/,
    persistent: true,
    ignoreInitial: true,
    usePolling: true
  });

  watcher.on('ready', () => {
    console.log(chalk.blueBright('[✨] Server hot reloading service started'));
    watcher.on('all', () => {
      console.log(
        chalk.blueBright('[✨]] Clearing /server/ module cache from server')
      );
      Object.keys(require.cache).forEach(id => {
        if (/[\/\\](server|common)[\/\\]/.test(id)) {
          console.log('deleting');
          delete require.cache[id];
        }
      });
    });
  });
};
