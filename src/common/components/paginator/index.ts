import { getPrevPage } from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import Paginator from './component';

const mapStateToProps = (state: AppState) => ({
  isSeparatorVisible: !!getPrevPage(state)
});

export default connect(mapStateToProps)(Paginator);
