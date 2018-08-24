import { connect } from 'react-redux';
import { Link, LinkProps } from 'react-router-dom';
import { AppState } from 'common/store/types';
import { getNextPage } from 'common/store/modules/posts/selectors';
import { routes } from 'common/routes';

type StateProps = Pick<LinkProps, 'to' | 'children'>;

const mapStateToProps = (state: AppState): StateProps => ({
  to: routes.top.generatePath(getNextPage(state)),
  children: 'Next page'
})

export default connect(mapStateToProps, undefined, (stateProps) => stateProps)(Link);

