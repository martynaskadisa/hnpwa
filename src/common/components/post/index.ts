import {
  getPostById,
  getPostRankById
} from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import Post, { IProps } from './component';

type StateProps = IProps;

interface IOwnProps {
  id: string;
}

const mapStateToProps = (state: AppState, { id }: IOwnProps): StateProps => {
  const { user, time_ago, title, commentsCount, points, url } = getPostById(
    state,
    {
      id
    }
  );
  const rank = getPostRankById(state, { id });

  return {
    author: user,
    rank,
    points,
    timeAgo: time_ago,
    title,
    commentCount: commentsCount,
    href: url
  };
};

export default connect(mapStateToProps)(Post);
