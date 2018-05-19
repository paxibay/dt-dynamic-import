import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const events = [
    "Dashboard",
    "Contract",
    "Document",
    "Nonexisted"
  ];

ReactDOM.render(<App events={events} />, document.getElementById('root'));
registerServiceWorker();
