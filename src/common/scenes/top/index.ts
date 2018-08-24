import Loading from 'common/components/loading';
import loadable from 'loadable-components';

export default loadable(
  () => import(/* webpackChunkName: 'scenes-top' */ './component'),
  {
    LoadingComponent: Loading,
    modules: ['./component']
  }
);
