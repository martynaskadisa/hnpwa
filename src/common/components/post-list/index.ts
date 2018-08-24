import { getIds } from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import PostList, { IProps } from './component';

type StateProps = Pick<IProps, 'ids'>;

const mapStateToProps = (state: AppState): StateProps => ({
  ids: getIds(state)
});

export default connect(mapStateToProps)(PostList);
