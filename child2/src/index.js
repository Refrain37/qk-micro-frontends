import './public-path'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react17] react app bootstraped');
}

export async function mount(props) {
  console.log('[react17] props from main framework', props);
  render(props);
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}