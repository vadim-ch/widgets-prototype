import * as React from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from '../../../store/actions';
import { bindActionCreators } from 'redux';

class Dialog extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
      const { isOpened } = this.props;
      return (
        <React.Fragment>
          Dialog
        </React.Fragment>
      );
  }
}

const mapStateToProps = (state) => {
    return {
      isOpened: state.application.opened
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    actionsCreator: bindActionCreators(actionsCreators, dispatch)
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Dialog);