import { Middleware } from 'koa';
import * as koaWebpack from 'koa-webpack';
import config, { PUBLIC_PATH } from '../../../webpack/webpack.config';

export const createWebpackMiddleware = async (): Promise<Middleware> => {
  const serverConfig = { ...config, plugins: [] };

  const middleware = await koaWebpack({
    config: serverConfig,
    devMiddleware: {
      publicPath: PUBLIC_PATH,
      stats: 'minimal'
    }
  });

  return middleware;
};
