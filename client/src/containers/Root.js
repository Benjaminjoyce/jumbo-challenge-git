import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import CharactersPage from './CharactersPage';
import { Route } from 'react-router-dom';
import App from './App';
import CharacterProfilePage from './CharacterProfilePage';
import ComicsPage from './ComicsPage';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route exact path="/" component={App} />
      <Route
        exact
        path=':type/profile/:id' 
        component={CharacterProfilePage}
      />
      <Route exact path="/:type/:id" component={CharactersPage} />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
