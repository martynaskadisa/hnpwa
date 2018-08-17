import * as Koa from 'koa';
import * as mount from 'koa-mount';
import * as serve from 'koa-static';
import * as path from 'path';
import { ROOT_DIR } from 'server/utils/path';
import { render } from './controllers/render';

const app = new Koa();

app.use(mount('/assets', serve(path.join(ROOT_DIR, 'dist'))));

app.use(render);

app.listen(3000, 'localhost', () =>
  // tslint:disable-next-line:no-console
  console.log('Server started on http://localhost:3000')
);
