import * as React from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from '../../../store/actions';
import { bindActionCreators } from 'redux';
import { FrameWrapper } from '../../components/frame-wrapper';
import Dialog from '../../containers/dialog';
import Welcome from '../../containers/welcome';
import { isDialogAvailable } from '../../../store/reducers/dialog/selectors';
import { isGroupsAvailable } from '../../../store/reducers/groups/selectors';
import { isInvitationRunned } from '../../../store/reducers/invitation/selectors';

class Frame extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
      const { isGroupsAvailable, isDialogAvailable, isInvitationRunned } = this.props;
      
      return (
        <FrameWrapper closeHandler={this.props.actionCreators.closeFrame}>
          {isInvitationRunned ?
            <div>Invite</div>
            :
            isGroupsAvailable ? 
              isDialogAvailable ?
                <Dialog/> : 
                <Welcome/> :
              'spiner'
            
          }
          
        </FrameWrapper>
      );
  }
}

const mapStateToProps = (state) => {
    return {
      isGroupsAvailable: isGroupsAvailable(state),
      isDialogAvailable: isDialogAvailable(state),
      isInvitationRunned: isInvitationRunned(state)
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    actionCreators: bindActionCreators(actionsCreators, dispatch)
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Frame);