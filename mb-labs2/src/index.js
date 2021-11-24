import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Base from './styles/Elements/Base';
import Reset from "./styles/generic/Reset";

ReactDOM.render(
  <React.StrictMode>

    <Reset />
    <Base />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

