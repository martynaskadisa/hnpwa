import { getVisibility } from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import Comment from './component';

interface IOwnProps {
  id: string;
}

const mapStateToProps = (state: AppState, { id }: IOwnProps) => {
  const item = state.posts.byId[id];

  return {
    content: item.content,
    author: item.user,
    timeAgo: item.timeAgo,
    isContentVisible: getVisibility(state, { id })
  };
};

export default connect(mapStateToProps)(Comment);
