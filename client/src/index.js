import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import './index.css';

import reducers from './reducers';
import home from './components/home';
import CharacterIndex from './components/characters_index';
import CharacterShow from './components/character_show';
import Header from './components/header';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <div>
          <Header />
          <Switch>
            <Route path="/characters/:id" component={CharacterShow} />
            <Route path="/" component={CharacterIndex} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
