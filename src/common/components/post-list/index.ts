import { RouteNameWithPosts } from 'common/routes';
import { getIds } from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import PostList, { IProps } from './component';

type StateProps = Pick<IProps, 'ids'>;

interface IOwnProps {
  route: RouteNameWithPosts;
}

const mapStateToProps = (
  state: AppState,
  { route }: IOwnProps
): StateProps => ({
  ids: getIds(state, { route })
});

export default connect(mapStateToProps)(PostList);
