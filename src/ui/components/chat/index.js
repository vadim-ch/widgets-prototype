import * as React from 'react';

export class Chat extends React.PureComponent {
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
            {this.props.offlineHandler ? <button onClick={this.props.offlineHandler}></button> : null}
        </React.Fragment>
    );
  }
}