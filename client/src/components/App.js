import React from 'react';
import Header from './Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CharacterProfile from './Character_profile';
import DisplayCharacters from '../containers/displayCharacters';

const App = () => (
  <div>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/characters/profile/:id"
          component={CharacterProfile}
        />
        <Route exact path="/characters/:id" component={DisplayCharacters} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
