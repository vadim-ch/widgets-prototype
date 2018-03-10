import * as React from 'react';
import { FrameHeader } from '../frame-header';

export class FrameWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      position: 'fixed',
      width: '370px',
      left: '50%',
      transform: 'translateX(-50%)',
      height: 'calc(100% - 20px - 75px - 20px)',
      bottom: 'calc(20px + 75px)',
      borderRadius: '5px',
      overflow: 'hidden',
      boxShadow: '0 1px 6px rgba(0,0,0,.06),0 2px 32px rgba(0,0,0,.16)',
      color: '#000'
    }
    
    return (
      <div style={styles} onClick={this.props.onClick}>
        <FrameHeader closeHandler={this.props.closeHandler}/>
        {this.props.children}
      </div>
    );
  }
}