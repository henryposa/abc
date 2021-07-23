import React from 'react';
import ReactDOM from 'react-dom';
import { Routers } from './routers/Routers';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById('root')
);


