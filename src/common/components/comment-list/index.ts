import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import CommentList from './component';

interface IOwnProps {
  id: string;
}

const mapStateToProps = (state: AppState, { id }: IOwnProps) => ({
  ids: state.posts.commentIdsById[id] || []
});

export default connect(mapStateToProps)(CommentList);
