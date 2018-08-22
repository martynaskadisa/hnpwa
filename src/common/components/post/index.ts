import { getPostById } from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import Post, { IProps } from './component';

type StateProps = IProps;

interface IOwnProps {
  id: string;
}

const mapStateToProps = (state: AppState, { id }: IOwnProps): StateProps => {
  const { user, time_ago, title, commentsCount, points } = getPostById(state, {
    id
  });

  return {
    author: user,
    points,
    timeAgo: time_ago,
    title,
    commentCount: commentsCount
  };
};

export default connect(mapStateToProps)(Post);
