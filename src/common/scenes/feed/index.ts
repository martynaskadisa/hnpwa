import Loading from 'common/components/loading';
import loadable from 'loadable-components';

export default loadable(
  () => import(/* webpackChunkName: 'scenes-feed' */ './container'),
  {
    LoadingComponent: Loading,
    modules: ['./container']
  }
);
