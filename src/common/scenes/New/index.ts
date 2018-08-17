import Empty from 'common/components/empty';
import { hot } from 'react-hot-loader';
import * as Loadable from 'react-loadable';

const loadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: 'scenes-new' */ './component'),
  loading: Empty
} as Loadable.OptionsWithoutRender<any>);

export default hot(module)(loadableComponent);
