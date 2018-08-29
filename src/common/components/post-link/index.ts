import { ItemType } from 'common/api/types';
import { withVisibility } from 'common/hocs/withVisibility';
import { routes } from 'common/routes';
import { getPostById } from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import PostLink from './component';

interface IOwnProps {
  id: string;
  children: React.ReactNode;
}

const mapStateToProps = (state: AppState, { id }: IOwnProps) => {
  const post = getPostById(state, { id });

  if (!post) {
    return {
      isVisible: false
    };
  }

  const { url, type } = post;
  const target = type === ItemType.Link ? '_blank' : undefined;
  const to = type === ItemType.Link ? url : routes.item.generatePath(id);
  const rel = type === ItemType.Link ? 'noopener' : undefined;
  const external = type === ItemType.Link;

  return {
    isVisible: true,
    to,
    target,
    rel,
    external
  };
};

export default connect(
  mapStateToProps,
  undefined,
  (stateProps, _, { children }) => ({ ...stateProps, children })
)(withVisibility(PostLink));
