import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import ApiCall from './middleware/index';
import './index.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, ApiCall))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
