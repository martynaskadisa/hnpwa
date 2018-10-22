import { RouteNameWithPosts, routes } from 'common/routes';
import { getNextPage } from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import { Link, LinkProps } from 'react-router-dom';

type StateProps = Pick<LinkProps, 'to' | 'children'>;

interface IOwnProps {
  route: RouteNameWithPosts;
}

const generatePathByRoute: Record<
  RouteNameWithPosts,
  (page: number) => string
> = {
  top: routes.top.generatePath,
  new: routes.new.generatePath,
  ask: routes.ask.generatePath,
  jobs: routes.jobs.generatePath,
  show: routes.show.generatePath
};

const mapStateToProps = (
  state: AppState,
  { route }: IOwnProps
): StateProps => ({
  to: generatePathByRoute[route](getNextPage(state, { route })),
  children: 'Next page'
});

export default connect(
  mapStateToProps,
  undefined,
  stateProps => stateProps
)(Link);
