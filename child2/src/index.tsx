import './public-path'
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
import App from './App';

import { isSingle } from './micro'
export { bootstrap, mount, unmount } from './micro'

export function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (isSingle) {
  render()
}
