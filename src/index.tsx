import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import './normalize.scss';
import { DarkModeProvider } from './providers/DarkModeProvider';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
