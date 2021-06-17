import './public-path'
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

import '@alifd/next/dist/next.css'

import { isSingle } from './micro'
export { bootstrap, mount, unmount } from './micro'

export const store = createStore(rootReducer)

export function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (isSingle) {
  render()
}
