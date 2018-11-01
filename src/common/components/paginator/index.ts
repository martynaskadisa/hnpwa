import { RouteNameWithPosts } from 'common/routes';
import { getPrevPage } from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import Paginator from './component';

interface IOwnProps {
  route: RouteNameWithPosts;
}

const mapStateToProps = (state: AppState, { route }: IOwnProps) => ({
  isSeparatorVisible: !!getPrevPage(state, { route })
});

export default connect(mapStateToProps)(Paginator);
