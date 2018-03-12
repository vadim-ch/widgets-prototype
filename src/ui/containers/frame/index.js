import * as React from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from '../../../store/actions';
import { bindActionCreators } from 'redux';
import { FrameWrapper } from '../../components/frame-wrapper';
import Dialog from '../../containers/dialog';
import Offline from '../../containers/offline';
import { isDialogAvailable } from '../../../store/reducers/dialog/selectors';
import { isGroupsAvailable } from '../../../store/reducers/groups/selectors';
import { isInvitationRunned } from '../../../store/reducers/invitation/selectors';
import { isAvailable } from '../../../store/reducers/available/selectors';
import { FrameState } from '../../../store/middlewares/frame-state-middleware';

class Frame extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
      const { isGroupsAvailable, isDialogAvailable, isInvitationRunned, isOnline } = this.props;
      
      return (
        <FrameWrapper closeHandler={this.props.actionCreators.closeFrame}>
          {this.view}
        </FrameWrapper>
      );
  }

  get view() {
    const spinnerStyle = {
      textAlign: 'center',
      marginTop: '100px'
    };
    const { frameState } = this.props;
    switch (frameState) {
      case FrameState.ONLINE: {
        return <Dialog/>
      }
      case FrameState.OFFLINE: {
        return <Offline/>
      }
      case FrameState.INVITE: {
        return <div>Invite</div>
      }
      default: return <div style={spinnerStyle}>spiner</div>;
    }
  }
}

const mapStateToProps = (state) => {
    return {
      isGroupsAvailable: isGroupsAvailable(state),
      isDialogAvailable: isDialogAvailable(state),
      isInvitationRunned: isInvitationRunned(state),
      isOnline: isAvailable(state),
      frameState: state.application.frameState,
      // frameState: getFrameState(state)
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    actionCreators: bindActionCreators(actionsCreators, dispatch)
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Frame);