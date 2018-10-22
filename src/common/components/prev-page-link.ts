import { VisibilityProps, withVisibility } from 'common/hocs/withVisibility';
import { generatePathByRoute, RouteNameWithPosts } from 'common/routes';
import { getPrevPage } from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import { Link, LinkProps } from 'react-router-dom';

type StateProps = VisibilityProps<Pick<LinkProps, 'to' | 'children'>>;

interface IOwnProps {
  route: RouteNameWithPosts;
}

const mapStateToProps = (state: AppState, { route }: IOwnProps): StateProps => {
  const prevPage = getPrevPage(state, { route });

  if (!prevPage) {
    return {
      isVisible: false
    };
  }

  return {
    isVisible: true,
    to: generatePathByRoute[route](prevPage),
    children: 'Prev page'
  };
};

export default connect(
  mapStateToProps,
  undefined,
  stateProps => stateProps
)(withVisibility(Link));
