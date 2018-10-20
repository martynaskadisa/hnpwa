import { withVisibility } from 'common/hocs/withVisibility';
import { getById } from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import PostContent from './component';

interface IOwnProps {
  id: string;
}

const mapStateToProps = (state: AppState, ownProps: IOwnProps) => {
  const item = getById(state, ownProps);

  if (!item || !item.content) {
    return {
      isVisible: false
    };
  }

  return {
    isVisible: true,
    content: item.content
  };
};

export default connect(mapStateToProps)(withVisibility(PostContent));
