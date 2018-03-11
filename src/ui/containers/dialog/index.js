import * as React from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from '../../../store/actions';
import { bindActionCreators } from 'redux';
import { getMessages } from '../../../store/reducers/messages/selectors';
import { Chat } from '../../components/chat';
import Welcome from '../../containers/welcome';
import { isDialogAvailable } from '../../../store/reducers/dialog/selectors';
import { isAvailable } from '../../../store/reducers/available/selectors';

class Dialog extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
      const { isDialogAvailable, messages, isOnline } = this.props;
      return (
        <React.Fragment>
          {isDialogAvailable ?
            <Chat
              messages={messages}
              offlineHandler={!isOnline ? this.props.actionsCreator.destroyDialog : null}
            /> : 
            <Welcome/> 
          }
        </React.Fragment>
      );
  }
}

const mapStateToProps = (state) => {
    return {
      isDialogAvailable: isDialogAvailable(state),
      messages: getMessages(state),
      isOnline: isAvailable(state)
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    actionsCreator: bindActionCreators(actionsCreators, dispatch)
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Dialog);