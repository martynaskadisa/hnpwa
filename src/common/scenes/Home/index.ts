import Loading from 'common/components/loading';
import loadable from 'loadable-components';

export default loadable(
  () => import(/* webpackChunkName: 'scenes-home' */ './component'),
  {
    LoadingComponent: Loading,
    modules: ['./component']
  }
);
