import { VisibilityProps, withVisibility } from 'common/hocs/withVisibility';
import { getPostById } from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import Post, { IProps } from './component';

type StateProps = VisibilityProps<IProps>;

interface IOwnProps {
  id: string;
}

const mapStateToProps = (state: AppState, { id }: IOwnProps): StateProps => {
  const post = getPostById(state, {
    id
  });

  if (!post) {
    return {
      isVisible: false
    };
  }

  return {
    isVisible: true,
    author: post.user,
    points: post.points,
    timeAgo: post.time_ago,
    title: post.title,
    commentCount: post.commentsCount,
    href: post.url
  };
};

export default connect(mapStateToProps)(withVisibility(Post));
