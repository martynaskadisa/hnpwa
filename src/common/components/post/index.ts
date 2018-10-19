import { withVisibility } from 'common/hocs/withVisibility';
import { getById } from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import Post from './component';

interface IOwnProps {
  id: string;
}

const mapStateToProps = (state: AppState, ownProps: IOwnProps) => {
  const post = getById(state, ownProps);

  if (!post) {
    return {
      isVisible: false
    };
  }

  return {
    isVisible: true,
    author: post.user,
    points: post.points,
    timeAgo: post.timeAgo,
    title: post.title
  };
};

export default connect(mapStateToProps)(withVisibility(Post));
