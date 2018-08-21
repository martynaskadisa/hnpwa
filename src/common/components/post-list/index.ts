import { fetchPosts } from 'common/store/modules/posts/actions';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import PostList, { IProps } from './component';

type StateProps = Pick<IProps, 'ids'>;
type DispatchProps = Pick<IProps, 'onMount'>;

const mapStateToProps = (state: AppState): StateProps => ({
  ids: state.posts.ids
});

const mapDispatchToProps: DispatchProps = {
  onMount: fetchPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
