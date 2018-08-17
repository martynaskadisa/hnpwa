import Loading from 'common/components/loading';
import { hot } from 'react-hot-loader';
import * as Loadable from 'react-loadable';

const loadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: 'scenes-home' */ './component'),
  loading: Loading
} as Loadable.OptionsWithoutRender<any>);

export default hot(module)(loadableComponent);
