import { withVisibility } from 'common/hocs/withVisibility';
import { routes } from 'common/routes';
import { getById } from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import CommentCount from './component';

interface IOwnProps {
  id: string;
}

const mapStateToProps = (state: AppState, { id }: IOwnProps) => {
  const post = getById(state, { id });

  if (!post) {
    return {
      isVisible: false
    };
  }

  return {
    isVisible: true,
    to: routes.item.generatePath(id),
    children: `${post.commentsCount} comments`
  };
};

export default connect(
  mapStateToProps,
  undefined,
  stateProps => stateProps
)(withVisibility(CommentCount));
