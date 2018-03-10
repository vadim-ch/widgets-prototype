import * as React from 'react';

export class FrameHeader extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      background: '#286efa',
      width: '100%',
      height: '40px',
      overflow: 'hidden',
      color: '#fff',
      boxShadow: '0 1px 4px rgba(0,0,0,.2)'
    }

    const buttonStyles = {
        background: '#fff',
        border: '0',
        borderRadius: '50%',
        padding: '2px 5px',
        margin: '0',
        cursor: 'pointer',
        position: 'absolute',
        right: '12px',
        top: '10px'
    }
    return (
      <div style={styles} onClick={this.props.onClick}>
        <button style={buttonStyles} type="button" onClick={this.props.closeHandler}>X</button>
      </div>
    );
  }
}