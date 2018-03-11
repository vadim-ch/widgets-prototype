import * as React from 'react';

export class Label extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      position: 'fixed',
      background: '#286efa',
      width: '80px',
      height: '80px',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: '5px',
      borderRadius: '50%',
      overflow: 'hidden',
      boxShadow: '0 1px 6px rgba(0,0,0,.06),0 2px 32px rgba(0,0,0,.16)',
      cursor: 'pointer',
      lineHeight: '80px',
      textAlign: 'center',
      color: '#fff'
    }

    return (
      <div style={styles} onClick={this.props.onClick}>
        {this.props.text}
      </div>
    );
  }
}