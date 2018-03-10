import * as React from 'react';
import App from '../ui/app';
import { Provider } from 'react-redux';

export default class Root extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}