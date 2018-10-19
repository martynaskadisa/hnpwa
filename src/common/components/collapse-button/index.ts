import { toggleVisibilityById } from 'common/store/modules/posts/actions';
import { getVisibility } from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import CollapseButton from './component';

interface IOwnProps {
  id: string;
}

const mapStateToProps = (state: AppState, ownProps: IOwnProps) => ({
  isCollapsed: !getVisibility(state, ownProps)
});

const mapDispatchToProps = (dispatch: Dispatch, { id }: IOwnProps) => ({
  onClick: () => dispatch(toggleVisibilityById(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollapseButton);
