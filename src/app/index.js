import * as React from 'react';
import * as ReactDom from 'react-dom';
import Root from '../ui/root';

import { store } from '../store';

export const runApp = () => {    
    const APP_NODE = document.getElementById('app');
    ReactDom.render(<Root store={store} />, APP_NODE);
};