import * as React from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from '../store/actions';
import { bindActionCreators } from 'redux';
import Frame from '../ui/containers/frame';
import { Label } from '../ui/components/label';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actionsCreators.startApp();
  }

  render() {   
    const { isOpened } = this.props;
    return (
      <React.Fragment>
        {isOpened ? 
          <Frame/> : 
          <Label onClick={this.props.actionsCreators.startDialog}/>
        }
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
    actionsCreators: bindActionCreators(actionsCreators, dispatch)
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(App);