import { VisibilityProps, withVisibility } from 'common/hocs/withVisibility';
import { generatePathByRoute, RouteNameWithPosts } from 'common/routes';
import {
  getNextPage,
  getPageLength
} from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import { Link, LinkProps } from 'react-router-dom';

type StateProps = Pick<LinkProps, 'to' | 'children'>;

interface IOwnProps {
  route: RouteNameWithPosts;
}

const MAX_PAGE_LENGTH = 30;

const mapStateToProps = (
  state: AppState,
  { route }: IOwnProps
): VisibilityProps<StateProps> => {
  if (getPageLength(state, { route }) < MAX_PAGE_LENGTH) {
    return {
      isVisible: false
    };
  }

  return {
    isVisible: true,
    to: generatePathByRoute[route](getNextPage(state, { route })),
    children: 'Next page'
  };
};

export default connect(
  mapStateToProps,
  undefined,
  stateProps => stateProps
)(withVisibility(Link));
