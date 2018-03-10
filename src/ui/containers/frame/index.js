import * as React from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from '../../../store/actions';
import { bindActionCreators } from 'redux';
import { FrameWrapper } from '../../components/frame-wrapper';
import Dialog from '../../containers/dialog';
import Welcome from '../../containers/welcome';
import { isDialogAvailable } from '../../../store/reducers/dialog/selectors';
import { isGroupsAvailable } from '../../../store/reducers/groups/selectors';

class Frame extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
      const { isGroupsAvailable, isDialogAvailable } = this.props;
      
      return (
        <FrameWrapper closeHandler={this.props.actionCreators.closeFrame}>
          {isGroupsAvailable ? 
            isDialogAvailable ?
              <Dialog/> : 
              <Welcome/> :
            'load'
          }
        </FrameWrapper>
      );
  }
}

const mapStateToProps = (state) => {
    return {
      isGroupsAvailable: isGroupsAvailable(state),
      isDialogAvailable: isDialogAvailable(state)
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    actionCreators: bindActionCreators(actionsCreators, dispatch)
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Frame);