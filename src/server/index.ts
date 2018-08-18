import * as Koa from 'koa';
import * as mount from 'koa-mount';
import * as serve from 'koa-static';
import * as path from 'path';
import { render } from 'server/middleware/render';
import { ROOT_DIR } from 'server/utils/path';
import { watch } from './watcher';

watch();

const init = async () => {
  const app = new Koa();

  app.use(mount('/assets', serve(path.join(ROOT_DIR, 'dist'))));

  if (process.env.NODE_ENV !== 'production') {
    const {
      createWebpackMiddleware
    } = await import('server/middleware/webpack');

    const webpack = await createWebpackMiddleware();
    app.use(webpack);

    app.use(async (ctx, next) => {
      const {
        render: dynamicRender
      } = await import('server/middleware/render');

      await dynamicRender(ctx, next);
    });
  } else {
    app.use(render);
  }

  app.listen(3000, 'localhost', () =>
    // tslint:disable-next-line:no-console
    console.log('Server started on http://localhost:3000')
  );
};

init();
