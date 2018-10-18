import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import Comment from './component';

interface IOwnProps {
  id: string;
}

export default connect((state: AppState, { id }: IOwnProps) => {
  const item = state.posts.byId[id];

  return {
    content: item.content
  };
})(Comment);
