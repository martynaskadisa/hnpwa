import Loading from 'common/components/loading';
import loadable from 'loadable-components';

export default loadable(
  () => import(/* webpackChunkName: 'scenes-new' */ './component'),
  {
    LoadingComponent: Loading,
    modules: ['./component']
  }
);
