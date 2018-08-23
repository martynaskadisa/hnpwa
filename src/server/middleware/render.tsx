import App from 'common/app';
import configureStore from 'common/store/configure-store';
import saga from 'common/store/saga';
import createMemoryHistory from 'history/createMemoryHistory';
import { Context, Middleware } from 'koa';
import { getLoadableState } from 'loadable-components/server';
import { chain, compose } from 'ramda';
import * as React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import Html from 'server/components/html';
import { getWebpackAssets } from 'server/utils/webpack';
import { Stats } from 'webpack';

const webpackAssets = getWebpackAssets();

interface IStatsJSON {
  assetsByChunkName: {
    [chunkName: string]: string | string[];
  };
  publicPath: string;
}

const getScripts = (ctx: Context) => {
  const stats: Stats = ctx.state.webpackStats;

  if (!stats) {
    return webpackAssets ? [(webpackAssets as any).app.js] : [];
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

export const render: Middleware = async ctx => {
  const scripts = getScripts(ctx);
  const routerCtx = {};
  const history = createMemoryHistory({ initialEntries: [ctx.request.url] });
  const store = configureStore(history);

  const app = (
    <Provider store={store}>
      <StaticRouter context={routerCtx} location={ctx.request.url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const task = store.runSaga(saga);

  await task.done;

  const loadableState = await getLoadableState(app);
  const state = store.getState();

  const stream = renderToNodeStream(
    <Html scripts={scripts} app={app} state={state}>
      {loadableState.getScriptElement()}
    </Html>
  );

  ctx.status = state.response.statusCode;

  ctx.set('Content-Type', 'text/html');
  ctx.body = stream;
};
