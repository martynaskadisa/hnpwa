import App from 'common/app';
import { Context, Middleware } from 'koa';
import { chain, compose } from 'ramda';
import * as React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import Html from 'server/components/html';
import { Stats } from 'webpack';
import * as staticWebpackAssets from '../../../webpack-assets.json';

interface IStatsJSON {
  assetsByChunkName: {
    [chunkName: string]: string | string[];
  };
  publicPath: string;
}

const getScripts = (ctx: Context) => {
  const stats: Stats = ctx.state.webpackStats;

  if (!stats) {
    return [staticWebpackAssets.app.js];
  }

  const { publicPath, assetsByChunkName } = stats.toJson() as IStatsJSON;

  const transform = compose(
    (assets: string[]) => assets.map(asset => publicPath + asset),
    (assets: string | string[]) => (Array.isArray(assets) ? assets : [assets]),
    (chunkName: string) => assetsByChunkName[chunkName]
  );

  const chunkNames = Object.keys(assetsByChunkName);
  const scripts = chain(transform, chunkNames).filter(asset =>
    asset.endsWith('.js')
  );

  return scripts;
};

export const render: Middleware = ctx => {
  ctx.set('Content-Type', 'text/html');
  const scripts = getScripts(ctx);

  const Component = () => (
    <MemoryRouter>
      <Html scripts={scripts}>
        <App />
      </Html>
    </MemoryRouter>
  );

  const stream = renderToNodeStream(<Component />);

  ctx.body = stream;
};
