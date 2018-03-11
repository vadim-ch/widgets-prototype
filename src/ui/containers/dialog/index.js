import * as React from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from '../../../store/actions';
import { bindActionCreators } from 'redux';
import { getMessages } from '../../../store/reducers/messages/selectors';

class Dialog extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
      const { messages } = this.props;
      return (
        <React.Fragment>
          <div style={{padding: '10px 15px'}}>
            {messages.map(msg => 
              <div key={msg.id} style={{textAlign: msg.type === 'operator' ? 'left' : 'right'}}>{msg.text}</div>
            )}
          </div>
        </React.Fragment>
      );
  }
}

const mapStateToProps = (state) => {
    return {
      messages: getMessages(state)
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    actionsCreator: bindActionCreators(actionsCreators, dispatch)
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Dialog);