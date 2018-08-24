import * as Koa from 'koa';
import * as mount from 'koa-mount';
import * as serve from 'koa-static';
import * as path from 'path';
import { render } from 'server/middleware/render';
import { ROOT_DIR } from 'server/utils/path';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const init = async () => {
  if (process.env.NODE_ENV !== 'production') {
    const { watch } = await import('server/watcher');

    watch();
  }

  const app = new Koa();

  app.use(
    mount(
      '/assets',
      serve(path.join(ROOT_DIR, 'dist'), {
        setHeaders(res) {
          res.setHeader(
            'Cache-Control',
            'max-age=60, s-maxage=86400, immutable'
          );
        }
      })
    )
  );

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

  app.listen(PORT, HOST, () =>
    // tslint:disable-next-line:no-console
    console.log(`Server started on http://${HOST}:${PORT}`)
  );
};

init();
