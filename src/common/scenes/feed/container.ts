import { VisibilityProps, withVisibility } from 'common/hocs/withVisibility';
import { RouteNameWithPosts } from 'common/routes';
import { routes } from 'common/routes';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import Feed, { IProps } from './component';

const typeSelector = (state: AppState): RouteNameWithPosts | null => {
  const url = state.router.location.pathname;
  if (routes.top.match(url) || routes.home.match(url)) {
    return 'top';
  }

  if (routes.new.match(url)) {
    return 'new';
  }

  if (routes.show.match(url)) {
    return 'show';
  }

  if (routes.jobs.match(url)) {
    return 'jobs';
  }

  if (routes.ask.match(url)) {
    return 'ask';
  }

  return null;
};

const mapStateToProps = (state: AppState): VisibilityProps<IProps> => {
  const type = typeSelector(state);

  if (!type) {
    return {
      isVisible: false
    };
  }

  return {
    isVisible: true,
    type
  };
};

export default connect(mapStateToProps)(withVisibility(Feed));
