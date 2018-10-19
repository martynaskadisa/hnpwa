import { withVisibility } from 'common/hocs/withVisibility';
import { getById, getVisibility } from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import Comment from './component';

interface IOwnProps {
  id: string;
}

const mapStateToProps = (state: AppState, ownProps: IOwnProps) => {
  const item = getById(state, ownProps);

  if (!item) {
    return {
      isVisible: false
    };
  }

  return {
    isVisible: true,
    content: item.content,
    author: item.user,
    timeAgo: item.timeAgo,
    isContentVisible: getVisibility(state, ownProps)
  };
};

export default connect(mapStateToProps)(withVisibility(Comment));
