// O index.js ficará responsável por chamar os componentes principais da App

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById("root")
);