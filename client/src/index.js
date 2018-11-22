import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './containers/Root';
import './index.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import configureStore from './store/configureStore';

const store = configureStore();
render(
  <BrowserRouter>
    <Root store={store} />
  </BrowserRouter>,
  document.getElementById('root')
);
