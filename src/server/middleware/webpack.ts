import { Middleware } from 'koa';
import * as koaWebpack from 'koa-webpack';
import { DefinePlugin } from 'webpack';
import config, { PUBLIC_PATH } from '../../../webpack/webpack.config';

export const createWebpackMiddleware = async (): Promise<Middleware> => {
  const serverConfig = {
    ...config,
    plugins: [
      new DefinePlugin({
        'process.env': {
          TARGET: JSON.stringify('browser')
        }
      })
    ]
  };

  const middleware = await koaWebpack({
    config: serverConfig,
    devMiddleware: {
      publicPath: PUBLIC_PATH,
      stats: 'minimal',
      serverSideRender: true
    }
  });

  return middleware;
};
