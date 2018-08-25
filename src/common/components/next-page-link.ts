import { routes } from 'common/routes';
import { getNextPage } from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import { Link, LinkProps } from 'react-router-dom';

type StateProps = Pick<LinkProps, 'to' | 'children'>;

const mapStateToProps = (state: AppState): StateProps => ({
  to: routes.top.generatePath(getNextPage(state)),
  children: 'Next page'
});

export default connect(
  mapStateToProps,
  undefined,
  stateProps => stateProps
)(Link);
