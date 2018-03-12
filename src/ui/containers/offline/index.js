import * as React from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from '../../../store/actions';
import { bindActionCreators } from 'redux';
import { isAvailable } from "../../../store/reducers/available/selectors";
import { FrameState } from "../../../store/middlewares/frame-state-middleware";

class Offline extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const inputStyles = {
      display: 'block',
      width: '100%',
      height: '38px',
      padding: '7px 35px 7px 12px',
      boxSizing: 'border-box',
      fontSize: '14px',
      border: '1px solid #dadfe3',
      borderRadius: '4px',
      marginTop: '20px'
    }

    const textareaStyles = {
      height: '80px',
      resize: 'none'
    }

    return (
      <React.Fragment>
        <div style={{padding: '10px 15px'}}>
          Offline form
          <input style={{...inputStyles, marginTop: '0'}} placeholder="name"/>
          <input style={inputStyles} placeholder="email"/>
          <textarea style={{...inputStyles, ...textareaStyles}} placeholder="send message"/>
          <button onClick={this.props.actionsCreator.goToDialog}>Send</button>
          {this.props.isOnline ? <button onClick={() => this.props.actionsCreator.setFrameState(FrameState.ONLINE)}>Go to online form</button> : null}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      isOpened: state.application.opened,
      isOnline: isAvailable(state)
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    actionsCreator: bindActionCreators(actionsCreators, dispatch)
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Offline);